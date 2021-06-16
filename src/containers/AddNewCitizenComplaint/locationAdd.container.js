import {Text, View} from 'react-native';

import {PrimaryButton} from '../../components';
import React from 'react';
import {Ubication} from '..';

const LocationAdd = props => {
  const next = () => {
    props.navigation?.navigate('EvidenceAdd', {
      ...props.route.params,
    });
  };
  return <Ubication pressFunction={next} />;
};
export default LocationAdd;
