import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input, PrimaryButton, Layout} from '../../../components';
import useUserConfig from '../../../library/hooks/useUserConfig';
import {styleUserConfig} from '../../../library/styles';
import {colors} from '../../../library/styles/vars';

const UserConfiguration = ({navigation}) => {
  const {inputItems, updateValues} = useUserConfig(navigation);

  return (
    <Layout scroll>
      <View style={styleUserConfig.container}>
        <View style={styleUserConfig.viewImage}>
          <Icon name="user" size={120} style={styleUserConfig.profile} />
          <Icon name="edit" size={20} style={styleUserConfig.editIcon} />
        </View>
        <View>
          {inputItems.map(item => (
            <View key={item.placeholder} style={styleUserConfig.input}>
              <Icon
                name={item.icon}
                size={item.size}
                color={colors.PrimaryColor}
              />
              <Input
                value={item.value}
                onChangeText={item.onChange}
                placeholder={item.placeholder}
                secureTextEntry={item.isPass}
              />
            </View>
          ))}
        </View>
        <PrimaryButton text="Guardar cambios" onPress={updateValues} />
      </View>
    </Layout>
  );
};

export default UserConfiguration;
