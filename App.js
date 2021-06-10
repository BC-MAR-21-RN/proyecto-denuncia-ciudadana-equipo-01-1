
import React from 'react';
import {Screens} from './src/navigators/screen.container';
import {useGoogleConfiguration} from './src/library/hooks';
import {withRedux} from './src/library/redux';

const App = () => {
  useGoogleConfiguration();
  return <Screens />;
};

export default withRedux(App);
