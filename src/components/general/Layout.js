import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import React from 'react';
import {View} from 'react-native';
import {styleLayout as style} from '../../library/styles';

const Layout = ({children, backColor, scroll}) => {
  if (scroll) {
    return (
      <KeyboardAwareScrollView
        resetScrollToCoords={{x: 0, y: 0}}
        contentContainerStyle={{...style.containerScroll, ...style[backColor]}}
        enableAutomaticScroll
        scrollEnabled>
        {children}
      </KeyboardAwareScrollView>
    );
  }

  return (
    <View style={{...style.container, ...style[backColor]}}>{children}</View>
  );
};

export default Layout;
