import React, {useState} from 'react';
import {Text, View, FlatList, TouchableHighlight} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {Layout} from '../../../components';

import ReportOverview from '../../../components/general/reportOverview';
import {colors} from '../../../library/styles/vars';
import style from '../styles/HomeStyles';
import {useFirebaseGetGeneralList} from '../../../library/hooks';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

export default function Home({navigation}) {
  const [dataComplaint, setDataComplaint] = useState([]);
  const [myLIke, setMyLike] = useState(false);

  const goToDetails = () => navigation.navigate('ComplaintDetails');
  const goToConfig = () => navigation.navigate('UserConfiguration');

  const actionLike = id => {
    firestore()
      .collection('listComplaints')
      .doc('XJ5Qs0ttXjE1Ez3fInnM')
      .get()
      .then(resp => {
        if (resp.exists) {
          var DATA = resp.data()['list'];
          var newData = DATA.find(e => e.id === id)['likes'];
          var result = newData.find(e => e === auth().currentUser.uid);
          if (result) {
            let collectionData = DATA.map(e => {
              if (e.id === id) {
                e.likes = e.likes.filter(
                  like => like !== auth().currentUser.uid,
                );
              }
              return e;
            });
            firestore()
              .collection('listComplaints')
              .doc('XJ5Qs0ttXjE1Ez3fInnM')
              .set({list: collectionData});
            return false;
          } else {
            let collectionData = DATA.map(e => {
              if (e.id === id) {
                e.likes.push(auth().currentUser.uid);
              }
              return e;
            });
            firestore()
              .collection('listComplaints')
              .doc('XJ5Qs0ttXjE1Ez3fInnM')
              .set({list: collectionData});
            return false;
          }
        }
        return false;
      });
  };
  const numberLike = (list = []) => {
    const validation = list?.find(item => item === auth().currentUser.uid);
    validation ? setMyLike(true) : setMyLike(false);
    const likes = {myLike: validation ? true : false, totalLikes: list?.length};
    return likes;
  };
  useFirebaseGetGeneralList(
    'listComplaints',
    'XJ5Qs0ttXjE1Ez3fInnM',
    'list',
    setDataComplaint,
  );
  const goToPlaces = () => navigation.navigate('PlacesOfInterest');

  return (
    <Layout>
      <View style={style.homeContainer}>
        <View style={style.icon}>
          <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="transparent"
            onPress={goToConfig}>
            <Icon name={'settings'} size={30} color={colors.White} />
          </TouchableHighlight>
        </View>
        <Text style={style.homeTitle}>
          Lista de denuncias en:
          <Text onPress={goToPlaces}> Lugares de interes </Text>
        </Text>
        <FlatList
          style={style.reportList}
          data={dataComplaint}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <ReportOverview
              id={item.id}
              userName={item.userName}
              reportType={item.area}
              reportLocation={item?.location?.adminArea}
              title={item?.title}
              description={item?.description}
              likes={numberLike(item?.likes)}
              actionLike={actionLike}
              goToDetails={goToDetails}
            />
          )}
        />
      </View>
    </Layout>
  );
}
