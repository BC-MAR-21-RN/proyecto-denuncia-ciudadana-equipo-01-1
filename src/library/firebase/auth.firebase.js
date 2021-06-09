import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import firestore from '@react-native-firebase/firestore';
import {setBase64} from '../methods/security';
export const loginUserWithMail = async data => {
  return await auth()
    .signInWithEmailAndPassword(data['email'], setBase64(data['password']))
    .then(resp => resp)
    .catch(error => error);
};

export const createUserWithMail = async data => {
  return await auth()
    .createUserWithEmailAndPassword(data['email'], setBase64(data['password']))
    .then(resp => resp)
    .catch(error => {
      console.log('error pendejo', error);
      return error;
    });
};

export const authWithGoogle = async () => {
  const {idToken} = await GoogleSignin.signIn();
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  return auth()
    .signInWithCredential(googleCredential)
    .then(resp => resp)
    .catch(error => error);
};

export const logoutFirebase = navigate => {
  return auth()
    .signOut()
    .then(() => navigate('Login'));
};

const service = {
  loginUserWithMail,
  createUserWithMail,
  authWithGoogle,
  logoutFirebase,
};

export default service;
