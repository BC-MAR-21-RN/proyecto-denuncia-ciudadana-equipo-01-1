import {PrimaryButton, WheelSelect} from '../../components';
import React, {useState} from 'react';
import {StyleAddEditContainer} from '../../library/styles/container';
import {View} from 'react-native';
import {useFirebaseAreas} from '../../library/hooks';

const AreaAdd = props => {
  const [selectedItem, setSelectedItem] = useState(1);
  const [listArea, setListArea] = useState([]);
  const [listInitial] = useState([
    {id: 1, label: 'Services'},
    {id: 2, label: 'Security'},
    {id: 3, label: 'Infrastructure'},
    {id: 4, label: 'Authority abuse'},
    {id: 5, label: 'Human rights'},
  ]);

  const next = () => {
    props.navigation?.navigate('LocationAdd', {
      ...props.route.params,
      area: listArea.find(e => e.id === selectedItem)['label'],
    });
  };
  useFirebaseAreas(setListArea);
  const elementChange = item => {
    setSelectedItem(item);
  };

  return (
    <View style={StyleAddEditContainer.internalContainer}>
      {listArea?.length > 0 && (
        <WheelSelect
          listElements={listInitial}
          selectedItem={selectedItem}
          textWheel="What's the área?"
          elementChange={elementChange}
        />
      )}
      <PrimaryButton text="Next" onPress={next} />
    </View>
  );
};

export default AreaAdd;
