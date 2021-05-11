import {FlatList, View} from 'react-native';

import React from 'react';
import {styleListComplaint as styles} from '../../library/styles/index';

const ListComplaints = ({data, renderItem}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default ListComplaints;
