import React, {useState} from 'react';
import {Ubication} from '..';

const LocationAdd = props => {
  const [dataLocation, setDataLocation] = useState('');
  const next = () => {
    props.navigation?.navigate('EvidenceAdd', {
      ...props.route.params,
      location: dataLocation,
    });
  };

  return (
    <Ubication changeDataLocation={setDataLocation} pressFunction={next} />
  );
};
export default LocationAdd;
