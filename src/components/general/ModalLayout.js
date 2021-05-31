import {Modal, Text, View} from 'react-native';

import React from 'react';
import {styleModalLayout as styles} from '../../library/styles';

const ModalLayout = ({icon, text}) => {
  return (
    <Modal visible transparent animationType="slide">
      <View style={styles.mainContainer}>
        <View style={styles.infoContainer}>
          <Text style={styles.textModal}>{text}</Text>
        </View>
      </View>
    </Modal>
  );
};

export default ModalLayout;
