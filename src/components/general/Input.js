import {TextInput, View} from 'react-native';

import React from 'react';
import {styleInput as style} from '../../library/styles';

const Input = ({error, icon, ...rest}) => {
  return (
    <View style={{...style.conatiner, ...(error && style.error)}}>
      <TextInput placeholderTextColor="#ccc"  {...rest} style={style.input} />
    </View>
  );
};

export default Input;
