import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export const performGoogleAuth = async () => {
  const {idToken} = await GoogleSignin.signIn();

  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  // Sign-in the user with the credential
  return auth()
    .signInWithCredential(googleCredential)
    .then(resp => {
      createAditionalData(resp);
    })
    .catch(error => {});
};

export const createUserWithMail = () => {};

const createAditionalData = (resp, inputs) => {
  firestore()
    .collection('userData')
    .doc(auth().currentUser.uid)
    .set({
      name: auth().currentUser.displayName,
    })
    .then(() => {
      findAdditionalData();
    })
    .catch(errr => {});
};

const findAdditionalData = () => {
  firestore()
    .collection('reservas')
    .doc(auth().currentUser.uid)
    .get()
    .then(resp => {
      if (!resp.exists) {
        firestore().collection('reservas').doc(auth().currentUser.uid).set({
          flights: [],
        });
      }
    });
};
