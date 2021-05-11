import {TextInput, View} from 'react-native';

import React from 'react';
import {styleInput as style} from '../../library/styles';

const Input = ({icon, ...rest}) => {
  return (
    <View style={style.conatiner}>
      <TextInput {...rest} style={style.input} />
    </View>
  );
};

export default Input;

//<TextInput {...props} style={style.input} />;
