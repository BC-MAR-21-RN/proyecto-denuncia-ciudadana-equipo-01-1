/* eslint-disable react-hooks/exhaustive-deps */

import {useEffect, useState} from 'react';

import {Dimensions} from 'react-native';
import Geocoder from 'react-native-geocoder';
import Geolocation from '@react-native-community/geolocation';

const latDelta = 0.0122;
const lngDelta =
  (Dimensions.get('window').width / Dimensions.get('window').height) * latDelta;

const useLocation = () => {
  const [location, setLocation] = useState({
    region: {
      latitude: 19.252189,
      longitude: -103.707668,
      latitudeDelta: latDelta,
      longitudeDelta: lngDelta,
    },
    adress: {},
  });

  useEffect(() => {
    Geolocation.getCurrentPosition(initialLocation =>
      setLocation({
        ...location,
        region: {
          ...initialLocation.coords,
          latitudeDelta: latDelta,
          longitudeDelta: lngDelta,
        },
      }),
    );
  }, []);

  useEffect(() => {
    const {
      region: {latitude, longitude},
    } = location;
    Geocoder.geocodePosition({lat: latitude, lng: longitude}).then(res => {
      console.log('RESPONSE', res);
    // HERE IS THE ERROR CANT RESPONSE SEVERAL TIMES IN A SHORT TIME
    // WE SHOULD CHANGE THIS PACKAGE FRO ANOTHERONE
    });
  }, [location.region]);

  const onRegionChange = region => {
    console.log(region, 'THIS IS THE REGION');
    setLocation({
      ...location,

      region,
    });
  };
  return {location, onRegionChange};
};
export default useLocation;
