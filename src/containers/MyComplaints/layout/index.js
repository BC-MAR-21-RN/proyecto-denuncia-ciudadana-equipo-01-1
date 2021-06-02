import {
  Text,
  View,
  TouchableOpacity,
  Alert,
  SafeAreaView,
  FlatList,
} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {colors} from '../../../library/styles/vars';
import {sortArrayByDate, dateFormatter} from '../../../library/methods';
import {styles} from '../styles';
import {DialogES} from '../../../library/constants/dialogs-ES';

import {MyComplaintsData, MyComplaintsDataEmpty} from '../dummyData';

const ComplaintItem = ({category, title, date, id}) => {
  const onEditPress = () => {};

  const onDeletePress = () => {
    Alert.alert(
      DialogES.deleteComplaint,
      `<${title}> ${DialogES.deletionInfo}`,
      [
        {
          text: `${DialogES.cancel}`,
        },
        {
          text: `${DialogES.deletionConfirmation}`,
          onPress: () => {},
        },
      ],
    );
  };

  const onDetailsPress = () => {};

  return (
    <View style={styles.cardLayout}>
      <View style={styles.topSection}>
        <View style={styles.leftSide}>
          <Text style={styles.category}>{category}</Text>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.text}>{dateFormatter({date}, 'es')}</Text>
        </View>
        <View style={styles.rightSide}>
          <View style={styles.row}>
            <DotButton icon="edit" onPress={onEditPress} />
            <DotButton icon="delete" onPress={onDeletePress} />
            <DotButton icon="info" onPress={onDetailsPress} />
          </View>
        </View>
      </View>
    </View>
  );
};

const DotButton = ({icon, onPress, size = 30}) => {
  return (
    <TouchableOpacity style={styles.pressIcon} onPress={onPress}>
      <Icon name={`${icon}`} size={size} color={colors.DarkPrimary} />
    </TouchableOpacity>
  );
};

const renderComplaintItem = (category, title, date, id) => {
  return (
    <ComplaintItem category={category} title={title} date={date} id={id} />
  );
};

const EmptyList = () => {
  return (
    <Text style={styles.EmptyMessageText}>
      No tienes denuncias registradas.
    </Text>
  );
};

export const MyComplaints = props => {
  let sortedArray = useRef(sortArrayByDate(MyComplaintsData));
  useEffect(() => {
    sortedArray.current = sortArrayByDate(MyComplaintsData);
  }, []);

  return (
    <View style={styles.layout}>
      <View style={styles.headerSection}>
        <TouchableOpacity>
          <Text style={styles.topText}>Orden: por fecha</Text>
        </TouchableOpacity>
      </View>
      <SafeAreaView style={styles.listContainer}>
        <FlatList
          data={sortedArray.current}
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
