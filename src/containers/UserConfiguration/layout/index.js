import React from 'react';
import {View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Input, PrimaryButton, Layout} from '../../../components';
import {styleUserConfig} from '../../../library/styles';

const UserConfiguration = () => {
  return (
    <Layout scroll>
      <View style={styleUserConfig.container}>
        <View style={styleUserConfig.viewImage}>
          <Image
            source={require('../../../../assets/perfil.jpg')}
            style={styleUserConfig.profile}
          />
          <Icon name="edit" size={20} style={styleUserConfig.editIcon} />
        </View>
        <View>
          <View style={styleUserConfig.input}>
            <Image
              source={require('../../../../assets/user.png')}
              style={styleUserConfig.userIcon}
            />
            <Input placeholder="Usuario" />
          </View>
          <View style={styleUserConfig.input}>
            <Icon name="mail-outline" size={30} />
            <Input placeholder="E-mail" />
          </View>
          <View style={styleUserConfig.input}>
            <Icon name="lock-outline" size={30} />
            <Input placeholder="Contraseña" secureTextEntry />
          </View>
          <View style={styleUserConfig.input}>
            <Icon name="lock-outline" size={30} />
            <Input placeholder="Confirmar contraseña" secureTextEntry />
          </View>
        </View>
        <PrimaryButton text="Guardar cambios" />
      </View>
    </Layout>
  );
};

export default UserConfiguration;
