import {Text, View} from 'react-native';
import {Input, Layout, PrimaryButton} from '../../../components';
import {useGeolocationConfiguration, useLocation} from '../../../library/hooks';
import {styleMap as style} from '../../../library/styles/index';
import React from 'react';
import Map from '../../../components/general/Map';

const Ubication = () => {
  useGeolocationConfiguration();
  const {location, address, onRegionChange} = useLocation();

  return (
    <Layout>
      <View style={style.map}>
        <Map state={location} onRegionChange={onRegionChange} />
        <View style={style.map}>
          <View style={style.viewDown}>
            <View style={style.inputs}>
              <Text style={style.title}>Dirección:</Text>
              <Input
                editable
                multiline
                styleContainer={style.textInput}
                value={address}
              />
              <PrimaryButton text="Continuar" />
            </View>
          </View>
        </View>
      </View>
    </Layout>
  );
};

export default Ubication;
