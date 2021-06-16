import {Date, PrimaryButton} from '../../components';
import React, {useState} from 'react';

import {View} from 'react-native';
import {generalContainer} from './styleAddContainer';

const DateEventsAdd = props => {
  const [dateSelected, setDateSelected] = useState();
  const next = () => {
    props.navigation?.navigate('AreaAdd', {
      ...props.route.params,
    });
  };
  const dateChange = date => {
    setDateSelected(date ? date.toString() : date);
    console.log(dateSelected);
  };
  return (
    <View style={generalContainer.internalContainer}>
      <Date dateChange={dateChange} textDate="Select date" />
      <PrimaryButton text="Next" onPress={next} />
    </View>
  );
};

export default DateEventsAdd;
