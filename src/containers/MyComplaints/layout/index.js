import {
  Text,
  View,
  TouchableOpacity,
  Alert,
  SafeAreaView,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../../../library/styles/vars';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {styles} from '../styles';

import {DATA, MyComp, MyCompEmpty} from '../dummyData';

const MyComplaints = props => {
  const DotButton = ({icon, onPress, size = 30}) => {
    return (
      <TouchableOpacity style={styles.pressIcon} onPress={onPress}>
        <Icon name={`${icon}`} size={size} color={colors.DarkPrimary} />
      </TouchableOpacity>
    );
  };

  const ComplaintItem = ({category, title, date, id}) => {
    return (
      <View style={styles.cardLayout}>
        <View style={styles.topSection}>
          <View style={styles.leftSide}>
            <Text style={styles.category}>{category}</Text>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.text}>{date}</Text>
          </View>
          <View style={styles.rightSide}>
            <View style={styles.row}>
              <DotButton icon="edit" onPress={onEditPress} />
              <DotButton icon="delete" onPress={onDeletePress} />
              <DotButton icon="info" />
            </View>
          </View>
        </View>
      </View>
    );
  };

  const renderComplaintItem = (category, title, date, id) => {
    return (
      <ComplaintItem category={category} title={title} date={date} id={id} />
    );
  };

  const sortByDate = array => {
    array.sort((a, b) => {
      return new Date(a.date) - new Date(b.date);
    });
  };

  const onEditPress = () => {
    Alert.alert('Pantalla de Edición');
  };

  const onDeletePress = () => {
    Alert.alert(
      '¿Borrar esta denuncia?',
      'Tu denuncia se eliminará de manera permanente',
      [
        {
          text: 'Cancelar',
        },
        {
          text: 'Sí, borrar',
        },
      ],
    );
  };

  const EmptyList = () => {
    return (
      <Text style={styles.EmptyMessageText}>
        No tienes denuncias registradas.
      </Text>
    );
  };

  return (
    <View style={styles.layout}>
      <View style={styles.headerSection}>
        <TouchableOpacity>
          <Text style={styles.topText}>Orden: por fecha</Text>
        </TouchableOpacity>
      </View>
      <SafeAreaView style={styles.listContainer}>
        <FlatList
          data={MyComp}
          renderItem={({item}) =>
            renderComplaintItem(item.category, item.title, item.date, item.id)
          }
          keyExtractor={item => item.id}
          ListEmptyComponent={EmptyList}
        />
      </SafeAreaView>
    </View>
  );
};

export default MyComplaints;
