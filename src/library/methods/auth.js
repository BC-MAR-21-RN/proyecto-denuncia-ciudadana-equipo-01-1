import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export const performGoogleAuth = async () => {
  const {idToken} = await GoogleSignin.signIn();

  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  return auth()
    .signInWithCredential(googleCredential)
    .then(resp => {
      createAditionalData(resp);
    })
    .catch(error => {});
};

export const createUserWithMail = ({email, password}) => {
  auth()
    .signInWithEmailAndPassword(email, password)
    .then(resp => {})
    .catch(error => {});
};

export const loginUserWithMail = ({email, password}) => {
  auth()
    .signInWithEmailAndPassword(email, password)
    .then(resp => {})
    .catch(error => {});
};

const createAditionalData = (resp, inputs) => {
  firestore()
    .collection('userData')
    .doc(auth().currentUser.uid)
    .set({
      name: auth().currentUser.displayName,
    })
    .then(() => {
      // findAdditionalData();
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
