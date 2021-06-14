import {useGoogleConfiguration, useRedirect} from '../../../library/hooks';

import AuthContent from '../reduxContainer';
import {Layout} from '../../../components';
import React from 'react';

const Login = props => {
  useGoogleConfiguration();
  //useRedirect(props);
  return (
    <Layout scroll backColor="DarkPrimary">
      <AuthContent {...props} />
    </Layout>
  );
};

export default Login;
