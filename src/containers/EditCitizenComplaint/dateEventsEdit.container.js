import React, {useState} from 'react';
import {PrimaryButton, Date} from '../../components';
import {View} from 'react-native';
import {StyleAddEditContainer} from '../../library/styles/container';

const DateEventsEdit = props => {
  const [dateSelected, setDateSelected] = useState();

  const save = () => {};
  const dateChange = date => {
    setDateSelected(date ? date.toString() : date);
    console.log(dateSelected);
  };
  return (
    <View style={StyleAddEditContainer.internalContainer}>
      <Date dateChange={dateChange} textDate="Select date" />
      <PrimaryButton text="Save" onPress={save} />
    </View>
  );
};

export default DateEventsEdit;
