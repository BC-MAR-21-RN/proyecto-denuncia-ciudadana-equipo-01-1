import {ScrollView, Text, View} from 'react-native';
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
        <View style={style.viewDown}>
          <View style={style.inputs}>
            <Text style={style.title}>Dirección:</Text>
            <ScrollView showsVerticalScrollIndicator={false}>
              <Input
                editable
                placeholder="Estado"
                styleContainer={style.textInput}
                value={address.adminArea}
              />
              <Input
                editable
                placeholder="Municipio"
                styleContainer={style.textInput}
                value={address.locality}
              />
              <Input
                editable
                placeholder="Código Postal"
                styleContainer={style.textInput}
                value={address.cp}
              />
              <Input
                editable
                placeholder="Asentamiento"
                styleContainer={style.textInput}
                value={address.subLocality}
              />
              <Input
                editable
                placeholder="Calle"
                styleContainer={style.textInput}
                value={address.streetName}
              />
              <Input
                editable
                placeholder="Número"
                styleContainer={style.textInput}
                value={address.streetNumber}
              />
            </ScrollView>

            <PrimaryButton text="Continuar" />
          </View>
        </View>
      </View>
    </Layout>
  );
};

export default Ubication;
