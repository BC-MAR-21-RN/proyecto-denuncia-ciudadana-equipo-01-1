import {Dimensions, Text, View} from 'react-native';
import {Input, Layout, PrimaryButton} from '../../../components';
import React, {useEffect, useState} from 'react';
import {currentPosition, getDriection} from '../../../library/methods';
import {useGeolocationConfiguration, useLocation} from '../../../library/hooks';

import Geolocation from '@react-native-community/geolocation';
import Map from '../../../components/general/Map';
import {styleMap as style} from '../../../library/styles/index';

/*
const latDelta = 0.0122;
const lngDelta =
  (Dimensions.get('window').width / Dimensions.get('window').height) * latDelta;
*/
const Ubication = () => {
  /*  const [address, setAddress] = useState('');
  const [state, setState] = useState({
    region: {
      latitude: 37.4219447,
      longitude: -122.0839864,
      latitudeDelta: latDelta,
      longitudeDelta: lngDelta,
    },
  });


  useEffect(() => {
    currentPosition(latDelta, lngDelta, setState);
    getDriection(latDelta, lngDelta, setAddress);
  }, []);

  const onRegionChange = region => {
    console.log(region);
    setState({region});
    getDriection(latDelta, lngDelta, setAddress);
  };
*/
  useGeolocationConfiguration();
  const {location, onRegionChange} = useLocation();
  return (
    <Layout>
      <View style={style.map}>
        <Map state={location} onRegionChange={onRegionChange} />
        <View style={style.map}>
          <View style={style.viewDown}>
            <View style={style.inputs}>
              <Text style={style.title}>Dirección:</Text>
              <Input multiline placeholder={location.adress.formattedAddress} />
              <PrimaryButton text="Continuar" />
            </View>
          </View>
        </View>
      </View>
    </Layout>
  );
};

export default Ubication;
