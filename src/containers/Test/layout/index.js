import React from 'react';

import {Layout, PrimaryButton} from '../../../components';

const Test = ({navigation}) => {
  return (
    <Layout>
      <PrimaryButton
        text="ir a detalles"
        onPress={() => {
          navigation.navigate('ComplaintDetails');
        }}
      />
    </Layout>
  );
};

export default Test;
