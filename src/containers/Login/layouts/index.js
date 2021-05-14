import {Layout, ModalLayout} from '../../../components';
import React, {Fragment, useState} from 'react';

import AuthContent from './authContent';

const Login = () => {
  const [islogin, setIsLogin] = useState(false);
  return (
    <Fragment>
      {/*<ModalLayout text="error" />*/}
      <Layout scroll backColor="DarkPrimary">
        {islogin ? (
          <AuthContent setIsLogin={setIsLogin} islogin={islogin} />
        ) : (
          <AuthContent setIsLogin={setIsLogin} islogin={islogin} />
        )}
      </Layout>
    </Fragment>
  );
};

export default Login;
