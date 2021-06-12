import React from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import {colors} from '../../../src/library/styles/vars';
import style from '../../library/styles/styleReportOverview';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function ReportOverview(props) {
  return (
    <View style={style.reportDetails}>
      <View>
        <Icon name={'person'} style={style.iconSpacing} size={30} color={colors.DarkPrimary}></Icon>
      </View>
      <View>
        <Text style={style.detailTextStyle}> {props.userName} </Text>
        <Text style={style.detailReportType}> {props.reportType} </Text>
      </View>
      <View>
        <Text style={style.detailTextStyle}>{props.reportLocation}</Text>
        <View style={style.reportInteractions}>
          <TouchableHighlight>
            <Icon name={'thumb-up'} style={style.iconSpacing} size={20} color={colors.DarkPrimary}></Icon>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={props.goToDetails}>
           <Icon name={'remove-red-eye'} style={style.iconSpacing} size={20} color={colors.DarkPrimary} ></Icon>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
}
