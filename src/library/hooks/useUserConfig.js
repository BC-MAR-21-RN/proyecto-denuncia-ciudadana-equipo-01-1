import {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {Alert} from 'react-native';
import {setBase64} from '../methods/security';

const useUserConfig = navigation => {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secondPass, setSecondPass] = useState('');
  const userAuth = auth().currentUser;
  const emailUser = userAuth.email;
  const displayName = userAuth.displayName;

  useEffect(() => {
    console.log(userAuth);
    setEmail(emailUser);
    if (userAuth.displayName === null) {
      firestore()
        .collection('userData')
        .doc(userAuth.uid)
        .get()
        .then(doc => {
          if (doc.exists) {
            userAuth.updateProfile({displayName: doc.data().name});
            setUser(doc.data().name);
          } else {
            console.log('documento no encontrado.');
          }
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      setUser(displayName);
    }
  }, [displayName, emailUser, userAuth]);

  const setValues = () => {
    setUser(userAuth.displayName);
    setEmail(userAuth.email);
    setPassword('');
    setSecondPass('');
  };

  const reauthenticate = currentPassword => {
    const credential = auth.EmailAuthProvider.credential(
      userAuth.email,
      setBase64(currentPassword),
    );
    return userAuth.reauthenticateWithCredential(credential);
  };

  const changeEmail = newEmail => {
    userAuth.updateEmail(newEmail).then(() => {
      userAuth.sendEmailVerification().then(() => {
        Alert.alert(
          'Operación exitosa',
          'Correo electrónico modificado de manera correcta. Se ha enviado un correo de verificación al nuevo correo.',
          [
            {
              text: 'Ok',
              onPress: () => {
                auth()
                  .signOut()
                  .then(() =>
                    Alert.alert(
                      'Cierre de sesión',
                      'Sesión cerrada, verifique su correo electrónico e ingrese sus datos actualizados.',
                    ),
                  );
                navigation.navigate('Login');
                setValues();
              },
            },
          ],
        );
      });
    });
  };

  const changeName = newName => {
    firestore()
      .collection('userData')
      .doc(userAuth.uid)
      .set({name: newName})
      .then(() => {
        userAuth.updateProfile({displayName: newName});
        Alert.alert(
          'Operación exitosa',
          'El nombre se ah modificado de manera exitosa.',
        );
        navigation.navigate('Home');
        setValues();
      });
  };

  const updateValues = () => {
    if (user && email && password && secondPass) {
      if (password === secondPass) {
        if (user !== displayName) {
          reauthenticate(password)
            .then(() => {
              changeName(user);
            })
            .catch(error => console.log(error));
        }
        if (email !== emailUser) {
          reauthenticate(password)
            .then(() => {
              changeEmail(email);
            })
            .catch(error => console.log(error));
        }
      } else {
        Alert.alert(
          'Error en contraseña.',
          'Las contraseñas no coinciden. Ingrese de nuevo.',
        );
      }
    } else {
      Alert.alert('Error en campos', 'No deben de existir campos vacíos.');
    }
  };

  const inputItems = [
    {
      icon: 'user',
      value: user,
      onChange: setUser,
      size: 30,
      placeholder: 'Usuario',
      isPass: false,
    },
    {
      icon: 'envelope',
      value: email,
      onChange: setEmail,
      size: 25,
      placeholder: 'Correo electrónico',
      isPass: false,
    },
    {
      icon: 'lock',
      value: password,
      onChange: setPassword,
      size: 30,
      placeholder: 'Contraseña',
      isPass: true,
    },
    {
      icon: 'lock',
      value: secondPass,
      onChange: setSecondPass,
      size: 30,
      placeholder: 'Confirmar contraseña',
      isPass: true,
    },
  ];

  return {inputItems, updateValues};
};

export default useUserConfig;
