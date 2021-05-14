import React, {useEffect, useState} from 'react';
import {Text, View, Dimensions} from 'react-native';
import {Input, Layout, PrimaryButton} from '../../../components';
import Map from '../../../components/general/Map';
import {currentPosition, getDriection} from '../../../library/methods';
import {styleMap as style} from '../../../library/styles/index';

const latDelta = 0.0122;
const lngDelta =
  (Dimensions.get('window').width / Dimensions.get('window').height) * latDelta;

const Ubication = () => {
  const [address, setAddress] = useState('');
  const [state, setState] = useState({
    region: {
      latitude: 37.4219447,
      longitude: -122.0839864,
      latitudeDelta: latDelta,
      longitudeDelta: lngDelta,
    },
  });

  useEffect(() => {
    currentPosition(latDelta, lngDelta, setState);
    getDriection(latDelta, lngDelta, setAddress);
  }, []);

  const onRegionChange = region => {
    setState({region});
    getDriection(latDelta, lngDelta, setAddress);
  };

  return (
    <Layout>
      <View style={style.map}>
        <Map state={state} onRegionChange={onRegionChange} />
        <View style={style.map}>
          <View style={style.viewDown}>
            <View style={style.inputs}>
              <Text style={style.title}>Dirección:</Text>
              <Input multiline placeholder={address} />
              <PrimaryButton text="Continuar" />
            </View>
          </View>
        </View>
      </View>
    </Layout>
  );
};

export default Ubication;
