import React from 'react'
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native'
import style from '../../library/styles/styleReportOverview'


export default function ReportOverview(props) {
    return (
        <View style={style.reportDetails}>
            <View>
                <Text>🤬</Text>
            </View>
            <View >
                <Text> {props.userName} </Text>
                <Text> {props.reportType} </Text>
            </View>
            <View>
                <Text>{props.reportLocation}</Text>
                <View style={style.reportInteractions}>
                    <TouchableHighlight onPress={()=>{console.log('LIKE');}}>
                        <Text>👍</Text>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={()=>{console.log('REPORT DETS');}}>
                        <Text>👁️</Text>
                    </TouchableHighlight>
                </View>
            </View>
        </View>
    )
}
