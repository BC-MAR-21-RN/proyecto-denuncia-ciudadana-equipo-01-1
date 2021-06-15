import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {setBase64} from '../methods/security';

export const loginUserWithMail = async ({email, password}) => {
  return await auth()
    .signInWithEmailAndPassword(email, setBase64(password))
    .then(() => true)
    .catch(() => false);
};

export const createUserWithMail = async ({email, password}) => {
  return await auth()
    .createUserWithEmailAndPassword(email, setBase64(password))
    .then(async () => {
      return await auth()
        .currentUser.sendEmailVerification()
        .then(() => {
          return auth()
            .signOut()
            .then(resp => {
              console.log('resp', resp);

              return true;
            });
        })
        .catch(error => {
          console.log('error', error);

          return false;
        });
    })
    .catch(() => false);
};

export const authWithGoogle = async () => {
  const {idToken} = await GoogleSignin.signIn();
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  return auth()
    .signInWithCredential(googleCredential)
    .then(() => true)
    .catch(() => false);
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
