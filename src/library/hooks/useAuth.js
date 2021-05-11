import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

export const useGoogleAuth = () => {
  // Get the users ID token

  const performGoogleAuth = async () => {
    const {idToken} = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth()
      .signInWithCredential(googleCredential)
      .then(resp => {
        console.log('RESPONSE===>', resp);
      })
      .catch(err => {
        console.log('ERROR===>', err);
      });
  };

  return {performGoogleAuth};
};
