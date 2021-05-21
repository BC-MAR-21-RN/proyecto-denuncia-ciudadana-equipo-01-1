import {Text, View} from 'react-native';

import {PrimaryButton} from '../../../../components';
import React from 'react';

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
