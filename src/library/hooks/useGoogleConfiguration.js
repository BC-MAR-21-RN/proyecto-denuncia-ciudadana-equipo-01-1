import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {useEffect} from 'react';
import {webClientId} from '../constants/config.json';

const useGoogleConfiguration = () => {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId: webClientId,
    });
  }, []);
};
export default useGoogleConfiguration;
