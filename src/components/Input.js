import React from 'react';
import {TextInput} from 'react-native';
import {style} from '../library/styles/styleInput';

const Input = props => {
  return <TextInput {...props} style={style.input} />;
};

export default Input;
