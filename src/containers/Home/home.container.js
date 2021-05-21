import React from 'react';
import {View, Text} from 'react-native';
import {PrimaryButton} from '../../components';

const SendDataAdd = props => {
  const next = () => {
    props.navigation.navigate('TitleDescriptionAdd', {
      ...props.route.params,
    });
  };
  return (
    <View>
      <Text>You are in home</Text>
      <PrimaryButton text="New" onPress={next} />
    </View>
  );
};
export default SendDataAdd;
