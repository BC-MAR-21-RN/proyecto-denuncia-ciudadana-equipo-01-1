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

export const createUserWithMail = async ({name, email, password}) => {
  return await auth()
    .createUserWithEmailAndPassword(email, setBase64(password))
    .then(async () => {
      createAditionalData(name);
      firestore()
        .collection('complaints')
        .doc('SbpNphb62pp4IEFhNsEo')
        .onSnapshot(resp => {
          if (resp) {
            return resp.data()['listComplaints'];
          }
        });

      return await auth()
        .currentUser.sendEmailVerification()
        .then(() => {
          return auth()
            .signOut()
            .then(() => true);
        })
        .catch(() => false);
    })
    .catch(() => false);
};

export const authWithGoogle = async () => {
  const {idToken} = await GoogleSignin.signIn();
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  return auth()
    .signInWithCredential(googleCredential)
    .then(() => {
      createAditionalData();
      return true;
    })
    .catch(() => false);
};

export const logoutFirebase = navigate => {
  return auth().signOut();
};

const createAditionalData = name => {
  firestore()
    .collection('userData')
    .doc(auth().currentUser.uid)
    .set({
      name: name || auth().currentUser.displayName,
    })
    .then(() => {
      findAdditionalData();
    });
};
const findAdditionalData = async () => {
  const fullData = await firestore()
    .collection('complaints')
    .doc('SbpNphb62pp4IEFhNsEo')
    .get()
    .then(resp => {
      if (resp.exists) {
        return resp.data()['listComplaints'];
      }
      return false;
    });
  const eleementInArr = fullData.find(({id}) => id === auth().currentUser.uid);
  if (!eleementInArr) {
    firestore()
      .collection('complaints')
      .doc('SbpNphb62pp4IEFhNsEo')
      .set({
        listComplaints: [
          ...fullData,
          {
            id: auth().currentUser.uid,
            list: [],
            initerestUbication: [],
          },
        ],
      });
  }
  return;
};

const service = {
  loginUserWithMail,
  createUserWithMail,
  authWithGoogle,
  logoutFirebase,
};

export default service;
