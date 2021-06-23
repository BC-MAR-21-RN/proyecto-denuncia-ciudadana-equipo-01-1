import React from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import {colors} from '../../../src/library/styles/vars';
import style from '../../library/styles/styleReportOverview';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export default function ReportOverview(props) {
  return (
    <View style={style.reportContainer}>
      <View style={style.headerCard}>
        <Icon
          name={'person'}
          style={style.iconSpacing}
          size={30}
          color={colors.DarkPrimary}
        />
        <Text style={style.detailTextStyle}> {props.userName} </Text>
        <Text style={style.detailReportType}> {props.reportType} </Text>
      </View>
      <Text style={style.title}>{props?.title}</Text>
      <View style={style.reportDetails}>
        <View>
          <Text style={style.detailTextStyle}>{props.reportLocation}</Text>
          <Text>{props?.description}</Text>
          <View style={style.reportInteractions}>
            <TouchableHighlight>
              <>
                <Icon
                  onPress={() => props.actionLike(props.id)}
                  name={'thumb-up'}
                  style={style.iconSpacing}
                  size={20}
                  color={
                    props?.likes?.myLike
                      ? colors.DarkPrimary
                      : colors.SecondaryText
                  }
                />
              </>
            </TouchableHighlight>

            <TouchableHighlight onPress={props.goToDetails}>
              <Icon
                name={'remove-red-eye'}
                style={style.iconSpacing}
                size={20}
                color={colors.DarkPrimary}
              />
            </TouchableHighlight>
          </View>
        </View>
      </View>
    </View>
  );
}
