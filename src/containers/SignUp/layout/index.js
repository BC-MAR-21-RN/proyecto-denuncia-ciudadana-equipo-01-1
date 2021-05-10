import {
  Complaints,
  Layout,
  ListComplaints,
  MyComplaint,
  PrimaryButton,
} from '../../../components';
import {StyleSheet, Text, View} from 'react-native';

import React from 'react';

const SignUp = () => {
  const data = [
    {
      title: 'title1',
      area: 'area1',
      dates: ['date1', 'date2'],
      userName: 'DEMIS',
      address: 'BLABLA 12345',
    },
    {
      title: 'title2',
      area: 'area2',
      dates: ['date1', 'date2'],
      userName: 'JOSE',
      address: 'BLABLA 123456',
    },
    {
      title: 'title3',
      area: 'area3',
      dates: ['date1', 'date2'],
      userName: 'ADRIAN',
      address: 'BLABLA 123457',
    },
  ];
  return (
    <Layout>
      <ListComplaints
        data={data}
        renderItem={({item}) => <Complaints {...item} />}
      />
      <PrimaryButton text="HELLO" />
    </Layout>
  );
};

export default SignUp;

const styles = StyleSheet.create({});

/*
    <Layout>
      <ListComplaints
        data={data}
        renderItem={({item}) => <MyComplaint {...item} />}
      />
    </Layout>

*/
