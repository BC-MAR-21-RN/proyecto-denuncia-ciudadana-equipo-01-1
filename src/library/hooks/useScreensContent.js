import React from 'react';
import {colors} from '../styles/vars';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TouchableHighlight} from 'react-native';
import {
  AreaAdd,
  ComplaintDetails,
  DateEventsAdd,
  EvidenceAdd,
  LocationAdd,
  Login,
  MyComplaints,
  TitleDescriptionAdd,
  UserConfiguration,
} from '../../containers';
import TabNavigator from '../../navigators/tabs';
import {styleIconButtons} from '../styles';
import {UserOptions} from '../../components';

const useScreenContent = () => {
  const optionsBack = (
    navigation,
    HLeft,
    HRight,
    color = null,
    title = null,
  ) => ({
    headerTitle: title ? title : '',
    headerStyle: {
      backgroundColor: color ? color : colors?.LightPrimary,
      elevation: 0, // remove shadow on Android
      shadowOpacity: 0, // remove shadow on iOS
    },
    headerLeft: () => {
      if (HLeft) {
        return (
          <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="transparent"
            onPress={() => navigation.goBack()}
            style={styleIconButtons.backIcon}>
            <Icon name="arrow-left" size={30} />
          </TouchableHighlight>
        );
      }
    },
    headerRight: () => {
      if (HRight) {
        return <UserOptions navigation={navigation} />;
      }
    },
  });

  const listScreens = [
    {name: 'Login', component: Login, headerLeft: false, headerRight: false},
    {
      name: 'Home',
      component: TabNavigator,
      headerLeft: false,
      headerRight: true,
    },
    {
      name: 'MyComplaints',
      component: MyComplaints,
      headerLeft: false,
      headerRight: true,
      title: 'My Complaints',
    },
    {
      name: 'TitleDescriptionAdd',
      component: TitleDescriptionAdd,
      headerLeft: false,
      headerRight: true,
      title: 'My Complaints',
    },
    {
      name: 'DateEventsAdd',
      component: DateEventsAdd,
      headerLeft: true,
      headerRight: false,
      title: 'My Complaints',
    },
    {name: 'AreaAdd', component: AreaAdd, headerLeft: true, headerRight: false},
    {
      name: 'LocationAdd',
      component: LocationAdd,
      headerLeft: true,
      headerRight: false,
    },
    {
      name: 'EvidenceAdd',
      component: EvidenceAdd,
      headerLeft: true,
      headerRight: false,
    },

    {name: 'UserConfiguration', component: UserConfiguration, headerLeft: true},
    {name: 'ComplaintDetails', component: ComplaintDetails, back: true},
  ];

  return {optionsBack, listScreens};
};

export default useScreenContent;
