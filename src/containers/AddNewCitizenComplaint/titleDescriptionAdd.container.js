import {
  FormTitleDescription,
  PrimaryButton,
  WrapperKeyboardAvoid,
} from '../../components';
import {Text, View} from 'react-native';

import React from 'react';
import {StyleAddEditContainer} from '../../library/styles/container';
import {generalContainer} from './styleAddContainer';

const TitleAdd = props => {
  const next = () => {
    props.navigation?.navigate('DateEventsAdd', {
      ...props.route.params,
    });
  };
  return (
    <WrapperKeyboardAvoid>
      <View style={StyleAddEditContainer.internalContainer}>
        <View>
          <Text style={StyleAddEditContainer.textHeader}>
            Title and Description
          </Text>
          <FormTitleDescription />
        </View>
        <PrimaryButton text="Next" onPress={next} />
      </View>
    </WrapperKeyboardAvoid>
  );
};

export default TitleAdd;
