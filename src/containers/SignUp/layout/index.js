import {
  Complaints,
  Layout,
  ListComplaints,
  PrimaryButton,
} from '../../../components';

import React from 'react';

const SignUp = () => {
  const data = [
    {
      id: 1,
      title: 'title1',
      area: 'area1',
      dates: ['date1', 'date2'],
      userName: 'DEMIS',
      address: 'BLABLA 12345',
    },
    {
      id: 2,
      title: 'title2',
      area: 'area2',
      dates: ['date1', 'date2'],
      userName: 'JOSE',
      address: 'BLABLA 123456',
    },
    {
      id: 3,
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
