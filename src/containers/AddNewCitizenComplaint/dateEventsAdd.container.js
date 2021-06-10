import React, {useState} from 'react';
import {PrimaryButton, Date} from '../../components';
import {View} from 'react-native';
import {StyleAddEditContainer} from '../../library/styles/container';

const DateEventsAdd = props => {
  const [dateSelected, setDateSelected] = useState();
  const next = () => {
    props.navigation.navigate('AreaAdd', {
      ...props.route.params,
    });
  };
  const dateChange = date => {
    setDateSelected(date ? date.toString() : date);
    console.log(dateSelected);
  };
  return (
    <View style={StyleAddEditContainer.internalContainer}>
      <Date dateChange={dateChange} textDate="Select date" />
      <PrimaryButton text="Next" onPress={next} />
    </View>
  );
};

export default DateEventsAdd;
