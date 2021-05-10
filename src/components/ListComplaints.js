import React from 'react';
import {FlatList} from 'react-native';

const ItemList = ({data, renderItem}) => {
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
};

export default ItemList;
