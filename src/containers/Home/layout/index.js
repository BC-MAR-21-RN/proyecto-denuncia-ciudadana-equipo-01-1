import React from 'react';
import {Text, View, FlatList, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Layout} from '../../../components';
import ReportOverview from '../../../components/general/reportOverview';
import dummyData from '../../../library/dummyData/dummyData';
import { useRedirectOnLogout } from '../../../library/hooks';
import style from '../styles/HomeStyles';

export default function Home({navigation}) {
  const goToDetails = () => navigation.navigate('ComplaintDetails');
  const goToConfig = () => navigation.navigate('UserConfiguration');
  useRedirectOnLogout(navigation)
  return (
    <Layout>
      <View style={style.homeContainer}>
        <View style={style.icon}>
          <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="transparent"
            onPress={goToConfig}>
            <Icon name={'settings'} size={30} />
          </TouchableHighlight>
        </View>
        <Text style={style.homeTitle}>
          Lista de denuncias en:
          <Text style={style.homeTextStyle}
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
              goToDetails={goToDetails}
            />
          )}
        />
      </View>
    </Layout>
  );
}
