import React from 'react';
import {useGoogleConfiguration} from './src/library/hooks';
import {withRedux} from './src/library/redux';
import {Screens} from './src/screen.container';

const App = () => {
  useGoogleConfiguration();
  return <Screens />;
};

export default withRedux(App);
