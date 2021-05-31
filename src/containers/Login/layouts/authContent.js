import {Image, Text, View} from 'react-native';
import {Input, PrimaryButton} from '../../../components';
import React, {useState} from 'react';

import logo from '../../../../assets/logol.png';
import styles from '../styles';
import {useLoginControl} from '../../../library/hooks';

const AuthContent = () => {
  const [islogin, setIsLogin] = useState(false);
  const [
    propsName,
    propsEmail,
    propsPassword,
    errors,
    submit,
  ] = useLoginControl(islogin);
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Image style={styles.logo} source={logo} />
      </View>
      <View style={styles.inputContainer}>
        {!islogin && (
          <Input error={errors.name} {...propsName} placeholder="Nombre" />
        )}
        <Input error={errors.email} {...propsEmail} placeholder="Usuario" />
        <Input
          error={errors.password}
          {...propsPassword}
          placeholder="Contraseña"
        />
        <PrimaryButton onPress={submit} text={islogin ? 'Login' : 'Sign In'} />
        <Text style={styles.textArea}>-or-</Text>
        <PrimaryButton text={islogin ? 'Login' : 'Sign In'} />
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
