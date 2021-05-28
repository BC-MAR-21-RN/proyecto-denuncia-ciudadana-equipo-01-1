import React from 'react';
import {View, Text} from 'react-native';
import {styleWheelSelect} from '../../library/styles';
import {Icon} from 'react-native-eva-icons';
import Picker from '@gregfrench/react-native-wheel-picker';
var PickerItem = Picker.Item;

const WheelSelect = ({
  elementChange,
  selectedItem,
  textWheel = '',
  listElements,
}) => {
  return (
    <View style={styleWheelSelect.container}>
      <Text style={styleWheelSelect.text}>{textWheel}</Text>
      <View style={styleWheelSelect.pickerContainer}>
        <Icon
          name="arrow-right-outline"
          width={22}
          height={22}
          fill="#3366FF"
        />
        <Picker
          style={styleWheelSelect.picker}
          lineColor="#fff" //to set top and bottom line color (Without gradients)
          lineGradientColorFrom="#fff" //to set top and bottom starting gradient line color
          lineGradientColorTo="#fff" //to set top and bottom ending gradient
          selectedValue={selectedItem}
          itemStyle={styleWheelSelect.itemStyle}
          onValueChange={index => elementChange(index)}>
          {listElements.map(item => (
            <PickerItem label={item.label} value={item.id} key={item.id} />
          ))}
        </Picker>
        <Icon name="arrow-left-outline" width={22} height={22} fill="#3366FF" />
      </View>
    </View>
  );
};

export default WheelSelect;
