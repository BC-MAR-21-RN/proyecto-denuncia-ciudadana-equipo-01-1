import React from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import style from '../../library/styles/styleReportOverview';

export default function ReportOverview(props) {
  return (
    <View style={style.reportDetails}>
      <View>
        <Text>🤬</Text>
      </View>
      <View>
        <Text> {props.userName} </Text>
        <Text> {props.reportType} </Text>
      </View>
      <View>
        <Text>{props.reportLocation}</Text>
        <View style={style.reportInteractions}>
          <TouchableHighlight>
            <Text>👍</Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={props.goToDetails}>
            <Text>👁️</Text>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
}
