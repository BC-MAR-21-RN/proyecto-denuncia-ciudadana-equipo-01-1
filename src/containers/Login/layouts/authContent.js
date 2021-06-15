import {Image, Text, View} from 'react-native';
import {Input, ModalLayout, PrimaryButton} from '../../../components';
import React, {useState} from 'react';

import ModalScreen from './ModalScreen';
import logo from '../../../../assets/logol.png';
import styles from '../styles';
import {useLoginControl} from '../../../library/hooks';

const AuthContent = ({
  doLogin,
  signUp,
  googleAuthentication,
  user,
  ...rest
}) => {
  const [islogin, setIsLogin] = useState(true);
  const [propsName, propsEmail, propsPassword, errors, submit] =
    useLoginControl(islogin, doLogin, signUp);

  return (
    <View style={styles.container}>
      <ModalScreen {...{...user, ...rest}} />
      <View style={styles.iconContainer}>
        <Image style={styles.logo} source={logo} />
      </View>
      <View style={styles.inputContainer}>
        {!islogin && (
          <Input error={errors.name} {...propsName} placeholder="Nombre" />
        )}
        <Input error={errors.email} {...propsEmail} placeholder="Email" />
        <Input
          error={errors.password}
          {...propsPassword}
          placeholder="Contraseña"
        />
        <PrimaryButton onPress={submit} text={islogin ? 'Login' : 'Sign In'} />
        <Text style={styles.textArea}>-or-</Text>
        <PrimaryButton
          onPress={googleAuthentication}
          text={islogin ? 'Login Google' : 'Sign In Google'}
        />
      </View>

      <View style={styles.messageContaine}>
        <Text
          onPress={() => setIsLogin(!islogin)}
          style={{...styles.textArea, ...styles.underlined}}>
          {islogin ? "Don't you have an account?" : 'Already have an account?'}
        </Text>
      </View>
    </View>
  );
};

export default AuthContent;
