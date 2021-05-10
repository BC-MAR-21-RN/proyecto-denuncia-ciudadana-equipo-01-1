import {Text, TouchableHighlight} from 'react-native';

import React from 'react';
import {stylePrimaryButton as style} from '../../library/styles';

const PrimaryButton = ({buttonColor, textStyle, onPress, text}) => {

  return (
    <TouchableHighlight
      activeOpacity={0.6}
      onPress={onPress}
      style={{...style.button, ...style[buttonColor]}}>
      <Text style={{...style.text, ...textStyle}}>{text}</Text>
    </TouchableHighlight>
  );
};

export default PrimaryButton;
