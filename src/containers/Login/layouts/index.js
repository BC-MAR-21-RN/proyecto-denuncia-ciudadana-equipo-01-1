import React, {Fragment} from 'react';

import AuthContent from './authContent';
import {Layout} from '../../../components';
import {useGoogleConfiguration} from '../../../library/hooks';

const Login = () => {
  useGoogleConfiguration();
  return (
    <Fragment>
      <Layout scroll backColor="DarkPrimary">
        <AuthContent />
      </Layout>
    </Fragment>
  );
};

export default Login;
