import React from 'react';
import {View} from 'react-native';
import {style} from '../library/styles/styleLayout';

const Layout = ({children}) => {
  return <View style={style.container}>{children}</View>;
};

export default Layout;
