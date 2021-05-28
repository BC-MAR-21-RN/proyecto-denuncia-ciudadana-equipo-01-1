import {Text, View} from 'react-native';

import {PrimaryButton} from '../../../components';
import React from 'react';

const SendDataAdd = props => {
  const next = () => {
    props.navigation.navigate('TitleDescriptionAdd', {
      ...props.route.params,
    });
  };
  return (
    <View>
      <Text>You are in My complaints</Text>
    </View>
  );
};
export default SendDataAdd;
