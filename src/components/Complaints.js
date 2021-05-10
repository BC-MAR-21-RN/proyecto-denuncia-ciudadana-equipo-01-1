import React from 'react';
import {View, Text} from 'react-native';
import {style} from '../library/styles/styleComplaints';

const Complaints = ({userName, address, title}) => {
  return (
    <View style={style.container}>
      {/* <FontAwesomeIcon icon={faUserCircle} size={30} style={{ margin: 5 }} /> */}
      <View style={style.viewContainer}>
        <View style={style.viewRow}>
          <Text style={style.title}>{userName}</Text>
          <Text style={style.text}>{address}</Text>
        </View>
        <View style={style.viewRow}>
          <Text style={style.title}>{title}</Text>
          <View style={style.icons}>
            {/* <FontAwesomeIcon icon={faThumbsUp} size={20} style={{ marginRight: 15 }} /> */}
            {/* <FontAwesomeIcon icon={faEye} size={20} /> */}
          </View>
        </View>
      </View>
    </View>
  );
};

export default Complaints;
