import {TextInput, View} from 'react-native';

import React from 'react';
import {styleInput as style} from '../../library/styles';

const Input = ({icon, styleContainer, ...rest}) => {
  return (
    <View style={{...style.conatiner, ...styleContainer}}>
      <TextInput {...rest} style={style.input} />
    </View>
  );
};

export default Input;

//<TextInput {...props} style={style.input} />;
