import React from 'react';
import {View} from 'react-native';
import {styleLayout as style} from '../../library/styles';

const Layout = ({children, backColor}) => {
  return (
    <View style={{...style.container, ...style[backColor]}}>{children}</View>
  );
};

export default Layout;
