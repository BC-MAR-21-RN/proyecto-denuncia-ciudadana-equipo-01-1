import {Image, Text, View} from 'react-native';
import {Input, PrimaryButton} from '../../../components';

import React from 'react';
import logo from '../../../../assets/logol.png';
import styles from '../styles';

const AuthContent = ({islogin, setIsLogin}) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.image} source={logo} />
      </View>
      <View style={styles.inputContainer}>
        {!islogin && <Input placeholder="Nombre" />}
        <Input error placeholder="Usuario" />
        <Input error placeholder="Contraseña" />
        <PrimaryButton text={islogin ? 'Login' : 'Sign In'} />
        <Text style={styles.textWhite}>-or-</Text>
        <PrimaryButton text={islogin ? 'Login' : 'Sign In'} />
        <Text
          onPress={() => setIsLogin(!islogin)}
          style={{...styles.textWhite, ...styles.underlined}}>
          {islogin ? "Don't you have an account?" : 'Already have an account?'}
        </Text>
      </View>
    </View>
  );
};

export default AuthContent;
