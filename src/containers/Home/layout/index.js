import React from 'react';
import {Text, View, FlatList} from 'react-native';
import {Layout} from '../../../components';
import {TouchableHighlight} from 'react-native-gesture-handler';
import ReportOverview from '../../../components/general/reportOverview';
import dummyData from '../../../library/dummyData/dummyData';
import style from '../styles/HomeStyles';

export default function Home({navigation}) {
  const goToDetails = () => navigation.navigate('ComplaintDetails');

  return (
    <Layout>
      <View style={style.homeContainer}>
        <View style={style.viewTitle}>
          <Text style={style.homeTitle}>Lista de denuncias en:</Text>
          <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="transparent"
            onPressOut={() => {
              console.log('HomeSettings');
            }}>
            <Text style={style.homeTextStyle}> Lugares de interes</Text>
          </TouchableHighlight>
        </View>
        <FlatList
          style={style.reportList}
          data={dummyData}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <ReportOverview
              userName={item.username}
              reportType={item.reportType}
              reportLocation={item.location}
              goToDetails={goToDetails}
            />
          )}
        />
      </View>
    </Layout>
  );
}
