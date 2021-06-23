import {
  Text,
  View,
  TouchableOpacity,
  Alert,
  SafeAreaView,
  FlatList,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {colors} from '../../../library/styles/vars';
import {sortArrayByDate, dateFormatter} from '../../../library/methods';
import {styles} from '../styles';
import {DialogES} from '../../../library/constants/dialogs-ES';
import {useFirebaseGetGeneralList} from '../../../library/hooks';
import {MyComplaintsData} from '../dummyData';

const ComplaintItem = ({area, title, creationDate}) => {
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
          <Text style={styles.category}>{area}</Text>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.text}>{creationDate}</Text>
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

const renderComplaintItem = (area, title, creationDate, id) => {
  return (
    <ComplaintItem
      area={area}
      title={title}
      creationDate={creationDate}
      id={id}
    />
  );
};

const EmptyList = () => {
  return (
    <Text style={styles.EmptyMessageText}>{DialogES.emptyComplaints}</Text>
  );
};

export const MyComplaints = props => {
  const [dataMyComplaint, setDataMyComplaint] = useState([]);
  useFirebaseGetGeneralList(
    'listComplaints',
    'XJ5Qs0ttXjE1Ez3fInnM',
    'list',
    setDataMyComplaint,
    true,
  );
  let sortedArray = useRef(sortArrayByDate(MyComplaintsData));
  useEffect(() => {
    sortedArray.current = sortArrayByDate(MyComplaintsData);
  }, []);

  return (
    <View style={styles.layout}>
      <View style={styles.headerSection}>
        <TouchableOpacity>
          <Text style={styles.topText}>
            {DialogES.orderedBy}: {DialogES.filter}
          </Text>
        </TouchableOpacity>
      </View>
      <SafeAreaView style={styles.listContainer}>
        <FlatList
          data={dataMyComplaint}
          renderItem={({item}) =>
            renderComplaintItem(
              item.area,
              item.title,
              item.creationDate,
              item.id,
            )
          }
          keyExtractor={item => item.id}
          ListEmptyComponent={EmptyList}
        />
      </SafeAreaView>
    </View>
  );
};

export default MyComplaints;
