import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Input from '../../../components/general/Input';
import {colors} from '../../../library/styles/vars';
import style from './style';

export default function addPlace() {
  return (
    <View style={style.mainContainer}>
      <Text style={style.titleText}> Agregar lugar de Interes</Text>
      <View style={style.inputTextContainer}>
        <Input placeholder={'Pais'} />
      </View>
      <View style={style.inputTextContainer}>
        <Input placeholder={'Codigo Postal'} keyboardType="numeric" />
      </View>
      <View style={style.inputTextContainer}>
        <Input placeholder={'Vecindario'} />
      </View>

      <TouchableOpacity style={style.button}>
        <Icon name={'check'} color={colors.White} size={30} />
      </TouchableOpacity>
    </View>
  );
}
