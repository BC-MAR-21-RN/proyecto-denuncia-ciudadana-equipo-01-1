import React from 'react';
import {View, Text} from 'react-native';
import {style} from '../library/styles/styleMyComplaint';

const MyComplaint = ({title, area, dates}) => {
  return (
    <View style={style.container}>
      <View style={style.viewContainer}>
        <View style={style.viewTop}>
          <Text style={style.title}>{title}</Text>
          <Text style={style.text}>Área: {area}</Text>
        </View>
        <View style={style.viewDown}>
          <View>
            <Text style={style.text}>Fecha de registro: {dates[0]}</Text>
            <Text style={style.text}>Fecha de hechos: {dates[1]}</Text>
          </View>
          <View style={style.icons}>
            {/* <FontAwesomeIcon icon={faEdit} size={20} style={{ marginRight: 10 }} />
                        <FontAwesomeIcon icon={faTrashAlt} size={20} style={{ marginRight: 10 }} />
                        <FontAwesomeIcon icon={faExternalLinkAlt} size={20} /> */}
          </View>
        </View>
      </View>
    </View>
  );
};

export default MyComplaint;
