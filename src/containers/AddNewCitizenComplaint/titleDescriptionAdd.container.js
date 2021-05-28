import React from 'react';
import {View, Text} from 'react-native';
import {
  PrimaryButton,
  WrapperKeyboardAvoid,
  FormTitleDescription,
} from '../../components';
import {generalContainer} from './styleAddContainer';
const TitleAdd = props => {
  const next = () => {
    props.navigation.navigate('DateEventsAdd', {
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
