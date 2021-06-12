/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useState} from 'react';
import {Dimensions} from 'react-native';
import Geocoder from 'react-native-geocoder';
import Geolocation from '@react-native-community/geolocation';

Geocoder.fallbackToGoogle(process.env.GEOCODER_API_KEY);

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

  const [address, setAddress] = useState({
    adminArea: '',
    locality: '',
    cp: '',
    subLocality: '',
    streetName: '',
    streetNumber: '',
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

    try {
      getPosition(latitude, longitude);
    } catch (error) {
      console.log(error);
    }
  }, [location.region]);

  const getPosition = async (latitude, longitude) => {
    await Geocoder.geocodePosition({lat: latitude, lng: longitude}).then(
      res => {
        const add = res !== undefined ? res[0] : '';
        setAddress({
          adminArea: add.adminArea,
          locality: add.locality,
          cp: add.postalCode,
          subLocality:
            add.subAdminArea !== null ? add.subAdminArea : add.subLocality,
          streetName: add.streetName,
          streetNumber: add.streetNumber,
        });
      },
    );
  };

  const onRegionChange = region => {
    setLocation({
      ...location,
      region,
    });
  };

  const addressData = [
    {
      placeholder: 'Estado',
      value: address.adminArea,
    },
    {
      placeholder: 'Municipio',
      value: address.locality,
    },
    {
      placeholder: 'Código Postal',
      value: address.cp,
    },
    {
      placeholder: 'Asentamiento',
      value: address.subLocality,
    },
    {
      placeholder: 'Calle',
      value: address.streetName,
    },
    {
      placeholder: 'Número',
      value: address.streetNumber,
    },
  ];

  return {location, addressData, onRegionChange};
};
export default useLocation;
