import AuthContent from '../reduxContainer';
import {Layout} from '../../../components';
import React from 'react';
import {useGoogleConfiguration} from '../../../library/hooks';

const Login = () => {
  useGoogleConfiguration();
  return (
    <Layout scroll backColor="DarkPrimary">
      <AuthContent />
    </Layout>
  );
};

export default Login;
