import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {Input} from '../';
import {styleFormTitleDescription} from '../../library/styles/citizenComplaint';
import moment from 'moment';

const FormTitleDescription = ({
  title = '',
  description = '',
  anonymousUser = false,
  textHeader = '',
}) => {
  const [initialData, setInitialData] = useState('');
  const fecha = new Date();
  const hoy = fecha.getDate();
  return (
    <View style={styleFormTitleDescription.container}>
      <Text style={styleFormTitleDescription.text}>Complaints' Title</Text>
      <Input title for the complaint />
      <Text style={styleFormTitleDescription.text}>
        Complaints' Description
      </Text>
      <TextInput
        style={styleFormTitleDescription.descriptionInput}
        multiline
        numberOfLines={7}
        editable
        maxLength={60}
        placeholder="Description for the complaint"
      />
      <View style={styleFormTitleDescription.containerCheckBox}>
        <CheckBox value={anonymousUser} />
        <Text>do you want to publish in anonymous way?</Text>
      </View>
      <View style={styleFormTitleDescription.containerDate}>
        <Text>Creation date: {hoy}/05/2021</Text>
        <Text>Edition date: {hoy}/05/2021</Text>
      </View>
    </View>
  );
};
export default FormTitleDescription;
