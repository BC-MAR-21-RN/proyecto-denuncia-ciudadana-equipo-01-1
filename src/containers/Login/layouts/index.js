import {Layout, ModalLayout} from '../../../components';
import React, {Fragment, useState} from 'react';

import AuthContent from './authContent';

const Login = () => {
  return (
    <Fragment>
      <Layout scroll backColor="DarkPrimary">
        <AuthContent />
      </Layout>
    </Fragment>
  );
};

export default Login;
