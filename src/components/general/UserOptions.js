import React, {useState} from 'react';
import {View, Text, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {styleIconButtons} from '../../library/styles';
import {TouchableHighlight} from 'react-native-gesture-handler';
import auth from '@react-native-firebase/auth';

const UserOptions = ({navigation}) => {
  const [visible, setVisible] = useState(false);

  const showOptions = () => setVisible(!visible);
  const goUserConfig = () => {
    navigation.navigate('UserConfiguration');
    setVisible(false);
  };
  const logOut = () => {
    auth()
      .signOut()
      .then(() => {
        Alert.alert('Sesión', 'Sesión cerrada.');
        navigation.navigate('Login');
        setVisible(false);
      });
  };
  const iconButton = (isIcon, style, pressFunction, text) => {
    return (
      <TouchableHighlight
        activeOpacity={0.6}
        underlayColor="transparent"
        onPress={pressFunction}
        style={style}>
        {isIcon ? (
          <Icon name="user" size={30} />
        ) : (
          <Text style={styleIconButtons.text}>{text}</Text>
        )}
      </TouchableHighlight>
    );
  };

  return (
    <View style={styleIconButtons.container}>
      {iconButton(true, styleIconButtons.userIcon, showOptions)}
      {visible && (
        <View style={styleIconButtons.buttonsContainer}>
          {iconButton(false, null, goUserConfig, 'Ver perfil')}
          {iconButton(false, null, logOut, 'Cerrar sesión')}
        </View>
      )}
    </View>
  );
};

export default UserOptions;
