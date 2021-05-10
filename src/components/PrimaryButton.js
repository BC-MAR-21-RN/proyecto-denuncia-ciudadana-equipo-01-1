import React from 'react';
import {TouchableHighlight, Text} from 'react-native';
import {style} from '../library/styles/stylePrimaryButton';

const PrimaryButton = ({buttonStyle, textStyle, onPress, text}) => {
  return (
    <TouchableHighlight
      activeOpacity={0.6}
      underlayColor={'#341E8A'}
      onPress={onPress}
      style={{...style.button, ...buttonStyle}}>
      <Text style={{...style.text, ...textStyle}}>{text}</Text>
    </TouchableHighlight>
  );
};

export default PrimaryButton;
