import React from 'react';
import {View, Text} from 'react-native';
import {
  PrimaryButton,
  WrapperKeyboardAvoid,
  FormTitleDescription,
} from '../../components';
import {StyleAddEditContainer} from '../../library/styles/container';

const TitleEdit = props => {
  const save = () => {};
  return (
    <WrapperKeyboardAvoid>
      <View style={StyleAddEditContainer.internalContainer}>
        <View>
          <Text style={StyleAddEditContainer.textHeader}>
            Title and Description
          </Text>
          <FormTitleDescription />
        </View>
        <PrimaryButton text="Save" onPress={save} />
      </View>
    </WrapperKeyboardAvoid>
  );
};

export default TitleEdit;
