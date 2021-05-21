import React from 'react';
import {
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Platform,
} from 'react-native';
import {styleWrapperKeyboardAvoid} from '../../library/styles';
const WrapperKeyboardAvoid = props => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={-70}
      style={styleWrapperKeyboardAvoid.styleWrapper}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        {props.children}
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
export default WrapperKeyboardAvoid;
