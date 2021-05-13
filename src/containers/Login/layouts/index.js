import {Button, Scoll, StyleSheet, Text, View} from 'react-native';
import {Input, Layout, PrimaryButton} from '../../../components';

import React from 'react';
import styles from '../styles';

const Login = ({doLogin, user}) => {
  const userName = user?.additionalUserInfo?.profile?.given_name;

  return (
    <Layout backColor="DarkPrimary">
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Text>LOGO</Text>
        </View>
        <View style={styles.inputContainer}>
          <Input placeholder="Usuario" />
          <Input placeholder="Contraseña" />
          <PrimaryButton text="hello" />
        </View>
      </View>
    </Layout>
  );
};

export default Login;
