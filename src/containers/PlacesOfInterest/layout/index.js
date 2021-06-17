import React from 'react'

import { Text, TouchableOpacity, View } from 'react-native'

import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../../../library/styles/vars';

import style from '../styles/PFIstyles'

export default function PlacesOfInterest() {
    return (
        <View style={style.Maincontainer}>

            <View style={style.card}>
                <View>
                    <View style={style.cardTextAlignment}>
                        <Text style={style.cardText}>Pais</Text>
                        <Text style={style.cardText}>Colombia</Text>
                    </View>
                    <View style={style.cardTextAlignment}>
                        <Text style={style.cardText}>Codigo Postal</Text>
                        <Text style={style.cardText}>12345</Text>
                    </View>
                    <View style={style.cardTextAlignment}>
                        <Text style={style.cardText}>Vecindario</Text>
                        <Text style={style.cardText}>Barrio 1</Text>
                    </View>
                </View>
                <View style={style.buttonsCardAlignment}>

                    <TouchableOpacity style={style.cardIcon}>
                        <View style={style.buttonsCardAlignment}>
                            <Icon name={'border-color'} color={colors.DarkPrimary} size={25} />
                            <Text style={style.IconText}>  Editar </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={style.cardIcon}>
                        <View style={style.buttonsCardAlignment}>
                            <Icon name={'delete'}  color={colors.DarkPrimary} size={25} />
                            <Text style={style.IconText}> Borrar </Text>
                        </View>
                    </TouchableOpacity>

                </View>
            </View>
            <View style={style.topButtonContainer}>
                <TouchableOpacity style={style.topButton}>
                    <Icon name={'check'} size={30} color={'white'} />
                </TouchableOpacity>
            </View>

        </View>
    )
}
