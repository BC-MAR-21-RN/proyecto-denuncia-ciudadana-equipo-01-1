import React, {useState} from 'react';
import {View} from 'react-native';
import {PrimaryButton, WheelSelect} from '../../components';
import {StyleAddEditContainer} from '../../library/styles/container';

const AreaEdit = props => {
  const [selectedItem, setSelectedItem] = useState(1);
  const save = () => {};
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
      <PrimaryButton text="Save" onPress={save} />
    </View>
  );
};

export default AreaEdit;
