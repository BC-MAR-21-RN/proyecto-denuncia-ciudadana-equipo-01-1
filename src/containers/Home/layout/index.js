import {Text, View} from 'react-native';

import {PrimaryButton} from '../../../components';
import React from 'react';

const Home = props => {
  const next = () => {
    props.navigation.navigate('TitleDescriptionAdd', {
      ...props.route.params,
    });
  };
  return (
    <View>
      <Text>You are in home</Text>
    </View>
  );
};
export default Home;
