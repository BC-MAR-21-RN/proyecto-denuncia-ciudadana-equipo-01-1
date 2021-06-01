import React from 'react';
import {View, Text} from 'react-native';
import {PrimaryButton} from '../../components';

const LocationEdit = props => {
  const save = () => {
    console.log('Saving')
  };
  return (
    <View>
      <Text>Select location of the event</Text>
      <PrimaryButton text="Saving" onPress={save} />
    </View>
  );
};
export default LocationEdit;
