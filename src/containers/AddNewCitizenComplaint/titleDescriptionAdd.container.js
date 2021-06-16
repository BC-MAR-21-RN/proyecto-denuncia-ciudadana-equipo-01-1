import {
  FormTitleDescription,
  PrimaryButton,
  WrapperKeyboardAvoid,
} from '../../components';
import {Text, View} from 'react-native';

import React from 'react';
import {generalContainer} from './styleAddContainer';

const TitleAdd = props => {
  const next = () => {
    props.navigation?.navigate('DateEventsAdd', {
      ...props.route.params,
    });
  };
  return (
    <WrapperKeyboardAvoid>
      <View style={generalContainer.internalContainer}>
        <View>
          <Text style={generalContainer.textHeader}>Title and Description</Text>
          <FormTitleDescription />
        </View>
        <PrimaryButton text="Next" onPress={next} />
      </View>
    </WrapperKeyboardAvoid>
  );
};

export default TitleAdd;
