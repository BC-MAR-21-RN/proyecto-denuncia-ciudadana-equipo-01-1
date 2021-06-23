import {StackActions} from '@react-navigation/routers';
import auth from '@react-native-firebase/auth';
import {useEffect} from 'react';

export const useRedirect = props => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      props.cleanAuth();
      if (auth()?.currentUser?.uid&&auth().onAuthStateChanged()) {
        props?.navigation?.dispatch(StackActions.replace('Home'));
      }
    }, 1000);
    return () => {
      clearTimeout(timeout);
    };
  }, [auth().currentUser, props?.navigation, props.error,auth().onAuthStateChanged()]);
};
