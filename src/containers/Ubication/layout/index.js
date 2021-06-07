import {ScrollView, Text, View} from 'react-native';
import {Input, PrimaryButton} from '../../../components';
import {useGeolocationConfiguration, useLocation} from '../../../library/hooks';
import {styleMap as style} from '../../../library/styles/index';
import React from 'react';
import Map from '../../../components/general/Map';

const Ubication = ({pressFunction}) => {
  useGeolocationConfiguration();
  const {location, address, onRegionChange} = useLocation();

  const inputValue = [
    {
      placeholder: 'Estado',
      value: address.adminArea,
    },
    {
      placeholder: 'Municipio',
      value: address.locality,
    },
    {
      placeholder: 'Código Postal',
      value: address.cp,
    },
    {
      placeholder: 'Asentamiento',
      value: address.subLocality,
    },
    {
      placeholder: 'Calle',
      value: address.streetName,
    },
    {
      placeholder: 'Número',
      value: address.streetNumber,
    },
  ];

  return (
    <View style={style.map}>
      <Map state={location} onRegionChange={onRegionChange} />
      <View style={style.viewDown}>
        <Text style={style.title}>Dirección:</Text>
        <View style={style.inputs}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {inputValue.map(item => (
              <View style={style.textInput}>
                <Text style={style.text}>{item.placeholder}:</Text>
                <Input key={item.placeholder} editable value={item.value} />
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
      <View style={style.button}>
        <PrimaryButton text="Next" onPress={pressFunction} />
      </View>
    </View>
  );
};

export default Ubication;
