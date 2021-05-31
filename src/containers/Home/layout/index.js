import React from 'react';
import {Text, View, FlatList} from 'react-native';
import {Layout} from '../../../components';
import ReportOverview from '../../../components/general/reportOverview';
import dummyData from '../../../library/dummyData/dummyData';
import style from '../styles/HomeStyles';

export default function Home() {
  return (
    <Layout>
      <View style={style.homeContainer}>
        <Text style={style.homeTitle}>
          Lista de denuncias en:
          <Text
            onPress={() => {
              console.log('HomeSettings');
            }}>
            {' '}
            Lugares de interes
          </Text>
        </Text>
        <FlatList
          style={style.reportList}
          data={dummyData}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <ReportOverview
              userName={item.username}
              reportType={item.reportType}
              reportLocation={item.location}
            />
          )}
        />
      </View>
    </Layout>
  );
}
