/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useState} from 'react';
import {Dimensions} from 'react-native';
import Geocoder from 'react-native-geocoder';
import Geolocation from '@react-native-community/geolocation';

Geocoder.fallbackToGoogle('AIzaSyB8WtEVYUasBc0RXOj60P2Y-HyuI3m_BjQ');

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
  });

  const [address, setAddress] = useState('');

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

    try {
      getPosition(latitude, longitude);
    } catch (error) {
      console.log(error);
    }
  }, [location.region]);

  const getPosition = async (latitude, longitude) => {
    await Geocoder.geocodePosition({lat: latitude, lng: longitude}).then(
      res => {
        //console.log('RESPONSE', res[0].formattedAddress);
        const add = res !== undefined ? res[0].formattedAddress : '';
        setAddress(add);
      },
    );
  };

  const onRegionChange = region => {
    setLocation({
      ...location,
      region,
    });
  };
  return {location, address, onRegionChange};
};
export default useLocation;
