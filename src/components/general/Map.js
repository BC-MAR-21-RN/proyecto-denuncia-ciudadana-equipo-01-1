import React from 'react';
import {View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {styleMap as style} from '../../library/styles/index';

const Map = ({state, onRegionChange}) => {
  return (
    <View style={style.container}>
      <MapView
        style={style.map}
        initialRegion={state.region}
        onRegionChangeComplete={onRegionChange}>
        <Marker
          coordinate={{
            latitude: state.region.latitude,
            longitude: state.region.longitude,
          }}
          title="Usted está aquí"
        />
      </MapView>
    </View>
  );
};

export default Map;
