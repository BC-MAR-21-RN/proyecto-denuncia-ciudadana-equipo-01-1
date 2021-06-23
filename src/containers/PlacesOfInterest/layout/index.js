import React from 'react';

import { TouchableOpacity, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import Icon from 'react-native-vector-icons/MaterialIcons';
import PlaceInfoCard from '../../../components/placesOfInterest/placeInfoCard';

import ddata from '../DummyData/dummyData';
import style from '../styles/PFIstyles';

export default function PlacesOfInterest({ navigation }) {
  const addPlace = () => navigation.navigate('addPlaceOfInterest');
  const editPlace = () => navigation.navigate('editPlaceOfInterest');
  return (
    <View style={style.Maincontainer}>
      <View>
        <TouchableOpacity
          style={style.topButton}
          onPress={() => {
            addPlace();
          }}>
          <Icon name={'add'} size={30} color={'white'} />
        </TouchableOpacity>
      </View>
      <View style={style.Maincontainer}>
        <FlatList
          data={ddata}
          renderItem={({ item }) => {
            return (
              <PlaceInfoCard
                pais={item.pais}
                codigo={item.cp}
                vecindario={item.vecindario}
                delButton={() => { }}
                edButton={() => editPlace()}
              />
            );
          }}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
}
