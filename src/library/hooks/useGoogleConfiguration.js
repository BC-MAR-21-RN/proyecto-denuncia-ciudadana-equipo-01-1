import Geolocation from '@react-native-community/geolocation';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {useEffect} from 'react';
import {webClientId} from '../constants/config.json';

export const useGoogleConfiguration = () => {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId: webClientId,
    });
  }, []);
};
export const useGeolocationConfiguration = () => {
  useEffect(() => {
    Geolocation.setRNConfiguration({
      authorizationLevel: 'whenInUse',
      skipPermissionRequests: true,
    });
  }, []);
};
