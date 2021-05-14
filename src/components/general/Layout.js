import {ScrollView, View} from 'react-native';

import React from 'react';
import {styleLayout as style} from '../../library/styles';
import styles from '../../containers/Login/styles';

const Layout = ({children, backColor, scroll}) => {
  if (scroll) {
    return (
      <ScrollView
        contentContainerStyle={styles.contentStyles}
        style={{...style[backColor], ...style.containerScroll}}>
        {children}
      </ScrollView>
    );
  }

  return (
    <View style={{...style.container, ...style[backColor]}}>{children}</View>
  );
};

export default Layout;
