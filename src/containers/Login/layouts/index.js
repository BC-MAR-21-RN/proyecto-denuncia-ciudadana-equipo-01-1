import {Button, StyleSheet, Text, View} from 'react-native';

import React from 'react';

const Login = ({doLogin, user}) => {
  const userName = user?.additionalUserInfo?.profile?.given_name;
  return (
    <View>
      <Button title="PERFORM LOGIN" onPress={doLogin} />

      {userName ? (
        <Text>you are loged as {userName}</Text>
      ) : (
        <Text>you should logi in</Text>
      )}
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
