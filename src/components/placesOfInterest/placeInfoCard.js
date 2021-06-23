import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {colors} from '../../library/styles/vars';
import style from '../../containers/PlacesOfInterest/styles/PFIstyles';

export default function PlaceInfoCard({
  pais,
  codigo,
  vecindario,
  delButton,
  edButton,
}) {
  return (
    <View style={style.card}>
      <View>
        <View style={style.cardTextAlignment}>
          <Text style={style.cardText}>Pais</Text>
          <Text style={style.cardText}>{pais}</Text>
        </View>
        <View style={style.cardTextAlignment}>
          <Text style={style.cardText}>Codigo Postal</Text>
          <Text style={style.cardText}>{codigo}</Text>
        </View>
        <View style={style.cardTextAlignment}>
          <Text style={style.cardText}>Vecindario</Text>
          <Text style={style.cardText}>{vecindario}</Text>
        </View>
      </View>
      <View style={style.buttonsCardAlignment}>
        <TouchableOpacity style={style.cardIcon} onPress={edButton}>
          <View style={style.buttonsCardAlignment}>
            <Icon name={'border-color'} color={colors.DarkPrimary} size={25} />
            <Text style={style.IconText}> Editar </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={style.cardIcon} onPress={delButton}>
          <View style={style.buttonsCardAlignment}>
            <Icon name={'delete'} color={colors.DarkPrimary} size={25} />
            <Text style={style.IconText}> Borrar </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
