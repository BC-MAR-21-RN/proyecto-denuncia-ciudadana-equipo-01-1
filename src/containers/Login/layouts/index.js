import AuthContent from '../reduxContainer';
import {Layout} from '../../../components';
import React from 'react';
import {useGoogleConfiguration, useRedirect} from '../../../library/hooks';

const Login = (props) => {
  useGoogleConfiguration();
  useRedirect(props);
  return (
    <Layout scroll backColor="DarkPrimary">
      <AuthContent />
    </Layout>
  );
};

export default Login;
