import React from 'react'
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native'

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
const style = StyleSheet.create({
    reportDetails: {
        backgroundColor: '#B9D7F2',
        flexDirection: 'row',
        borderWidth:1,
        borderColor: 'black',
        width: '100%',
        justifyContent: 'space-between',
        paddingVertical: 10,
        paddingHorizontal:10
    },
    reportInteractions: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    }
})