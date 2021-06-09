import {StackActions} from '@react-navigation/routers';
import auth from '@react-native-firebase/auth';
import {useEffect} from 'react';

export const useRedirect = props => {
  console.log('PROPS', props);
  console.log('AUTH', auth());

  auth().onAuthStateChanged(user => {
    if (auth()?.currentUser?.uid) {
      console.log('Redirigiendo3');
      props.navigation.dispatch(StackActions.replace('Home'));
    }
  });
  /*
  useEffect(() => {
    console.log('Redirigiendo2');
    const timeout = setTimeout(() => {
      if (auth()?.currentUser?.uid) {
        console.log('Redirigiendo3');
        props.navigation.dispatch(StackActions.replace('Home'));
      }
    }, 1000);
    return () => {
      clearTimeout(timeout);
    };
  }, [auth()?.currentUser]);
  */
};
