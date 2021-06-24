import React, { useEffect, useState } from 'react';

import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import PlaceInfoCard from '../../../components/placesOfInterest/placeInfoCard';
import firestore from '@react-native-firebase/firestore';
import style from '../styles/PFIstyles';

export default function PlacesOfInterest({ navigation }) {

  async function getData() {
    try {
      const data = await firestore()
        .collection('listComplaints').doc('XJ5Qs0ttXjE1Ez3fInnM')
        .get()

      const arr = data._data.list.map((item) => {
        return {
          adminArea: item.location.adminArea,
          cp: item.location.cp,
          subLocality: item.location.subLocality
        }
      })

      const farr = [...new Set(arr)];
      return farr;

    }
    catch (e) {
      return e
    }
  }

  const [datastate, setdatastate] = useState([])
  useEffect(async () => {
    const firedata = await getData();
    setdatastate(firedata)

  }, [])

  console.log(datastate);

  return (
    <View style={style.Maincontainer}>

      <View style={style.Maincontainer}>
        <FlatList
          data={datastate}
          renderItem={({ item }) =>

            <PlaceInfoCard
              pais={item.adminArea}
              codigo={item.cp}
              vecindario={item.subLocality}
              edButton={() => { }}
            />

          }
          keyExtractor={item => item.subLocality}
        />
      </View>
    </View>
  );
}
