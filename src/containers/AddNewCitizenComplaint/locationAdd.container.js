import React from 'react';
import {View, Text} from 'react-native';
import {PrimaryButton} from '../../components';
const LocationAdd = props => {
  const next = () => {
    props.navigation.navigate('EvidenceAdd', {
      ...props.route.params,
    });
  };
  return (
    <View>
      <Text>Select location of the event</Text>
      <PrimaryButton text="Next" onPress={next} />
    </View>
  );
};
export default LocationAdd;
