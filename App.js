import {Login} from './src/containers';
import React from 'react';
import {useGoogleConfiguration} from './src/library/hooks';
import {withRedux} from './src/library/redux';

const App = () => {
  useGoogleConfiguration();
  return <Login />;
};

export default withRedux(App);
