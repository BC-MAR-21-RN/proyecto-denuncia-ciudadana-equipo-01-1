import React from 'react'
import { Text, View, StyleSheet, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler';
import { Layout } from '../../../components';
import ReportOverview from '../../../components/general/reportOverview';


const dummyData = [
    {
        id: 1,
        username: 'Jose Lopez',
        reportType: 'Seguridad',
        location: 'AV. Gomez Morin, AGS'
    },
    {
        id: 2,
        username: 'Juan Segura',
        reportType: 'Servicios',
        location: 'Colonia Villa Juarez, AGS'
    },
    {
        id: 3,
        username: 'Jorge Meade',
        reportType: 'Maltrato Animal',
        location: 'Parque Cedazo,AGS'
    },
    {
        id: 4,
        username: 'Jorge Meade',
        reportType: 'Maltrato Animal',
        location: 'Parque Cedazo,AGS'
    },
    {
        id: 5,
        username: 'Jorge Meade',
        reportType: 'Maltrato Animal',
        location: 'Parque Cedazo,AGS'
    },
    {
        id: 6,
        username: 'Jorge Meade',
        reportType: 'Maltrato Animal',
        location: 'Parque Cedazo,AGS'
    },
    {
        id: 7,
        username: 'Jorge Meade',
        reportType: 'Maltrato Animal',
        location: 'Parque Cedazo,AGS'
    },
    {
        id: 8,
        username: 'Jorge Meade',
        reportType: 'Maltrato Animal',
        location: 'Parque Cedazo,AGS'
    },
    {
        id: 9,
        username: 'Jorge Meade',
        reportType: 'Maltrato Animal',
        location: 'Parque Cedazo,AGS'
    },
    {
        id: 10,
        username: 'Jorge Meade',
        reportType: 'Maltrato Animal',
        location: 'Parque Cedazo,AGS'
    },
    {
        id: 11,
        username: 'Jorge Meade',
        reportType: 'Maltrato Animal',
        location: 'Parque Cedazo,AGS'
    },
    {
        id: 12,
        username: 'Jorge Meade',
        reportType: 'Maltrato Animal',
        location: 'Parque Cedazo,AGS'
    },
    {
        id: 13,
        username: 'LOLO GALLO',
        reportType: 'Maltrato Animal',
        location: 'Parque Cedazo,AGS'
    }
]

export default function Home() {
    return (
        
        <Layout>
            <View style={style.homeContainer}>
                <Text style={style.homeTitle}>Lista de denuncias en:
                <Text onPress={() => { console.log('HomeSettings'); }}> Lugares de interes</Text>
                </Text>
                    <FlatList
                        style={style.reportList}
                        data={dummyData}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (
                            <ReportOverview
                                userName={item.username}
                                reportType={item.reportType}
                                reportLocation={item.location}
                            />
                        )}
                    />
            </View>
        </Layout>
    )
}

const style = StyleSheet.create({
    reportList: {
        backgroundColor: '#C4C4C4',
        flexGrow:0,
        height:"70%"
    },
    homeContainer: {
        padding: 10
    },
    homeTitle: {
        fontSize: 20,
        paddingVertical: 10
    }
})
