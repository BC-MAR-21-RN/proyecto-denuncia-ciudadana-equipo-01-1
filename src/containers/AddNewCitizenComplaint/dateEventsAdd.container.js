import React, {useState} from 'react';
import moment from 'moment';
import {Date, PrimaryButton} from '../../components';
import {StyleAddEditContainer} from '../../library/styles/container';
import {View} from 'react-native';

const DateEventsAdd = props => {
  const [dateSelected, setDateSelected] = useState();
  const next = () => {
    props.navigation?.navigate('AreaAdd', {
      ...props.route.params,
      dataEvents: moment(new Date(dateSelected)).format('DD/MM/YYYY'),
    });
  };
  const dateChange = date => {
    setDateSelected(date ? date.toString() : date);
  };
  return (
    <View style={StyleAddEditContainer.internalContainer}>
      <Date dateChange={dateChange} textDate="Select date" />
      {dateSelected && <PrimaryButton text="Next" onPress={next} />}
    </View>
  );
};

export default DateEventsAdd;
