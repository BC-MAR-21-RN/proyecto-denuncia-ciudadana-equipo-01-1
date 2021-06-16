import React from 'react';
import {View, Text} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import {Icon} from 'react-native-eva-icons';
import {styleDate} from '../../library/styles';
const Date = ({dateChange, textDate = ''}) => {
  return (
    <View>
      <Text style={styleDate.text}>{textDate}</Text>
      <CalendarPicker
        previousComponent={
          <Icon
            name="chevron-left-outline"
            width={22}
            height={22}
            fill="#3366FF"
          />
        }
        previousTitleStyle={styleDate.previous}
        nextComponent={
          <Icon
            name="chevron-right-outline"
            width={22}
            height={22}
            fill="#3366FF"
          />
        }
        weekdays={['S', 'M', 'T', 'W', 'T', 'F', 'S']}
        onDateChange={date => dateChange(date)}
      />
    </View>
  );
};

export default Date;
