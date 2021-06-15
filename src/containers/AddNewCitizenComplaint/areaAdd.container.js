import React, {useState} from 'react';
import {View} from 'react-native';
import {PrimaryButton, WheelSelect} from '../../components';
import {StyleAddEditContainer} from '../../library/styles/container';

const AreaAdd = props => {
  const [selectedItem, setSelectedItem] = useState(1);
  const itemList = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

  const next = () => {
    props.navigation.navigate('LocationAdd', {
      ...props.route.params,
    });
  };

  const elementChange = item => {
    setSelectedItem(item);
  };

  return (
    <View style={StyleAddEditContainer.internalContainer}>
      <WheelSelect
        listElements={[
          {id: 1, label: 'Services'},
          {id: 2, label: 'Security'},
          {id: 3, label: 'Infrastructure'},
          {id: 4, label: 'Authority abuse'},
          {id: 5, label: 'Human rights'},
        ]}
        selectedItem={selectedItem}
        textWheel="What's the área?"
        elementChange={elementChange}
      />
      <PrimaryButton text="Next" onPress={next} />
    </View>
  );
};

export default AreaAdd;
