import React from 'react';
import {View, Text} from 'react-native';
import {
  PrimaryButton,
  WrapperKeyboardAvoid,
  FormTitleDescription,
} from '../../components';
import {StyleAddEditContainer} from '../../library/styles/container';

const TitleAdd = props => {
  const next = () => {
    props.navigation.navigate('DateEventsAdd', {
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
