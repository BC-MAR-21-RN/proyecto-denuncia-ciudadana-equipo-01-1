import React, {useState} from 'react';
import {View, Text, TextInput, TouchableHighlight} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {Input} from '../';
import {styleFormTitleDescription} from '../../library/styles/citizenComplaint';

const FormTitleDescription = ({
  title = '',
  description = '',
  anonymousUser,
  changeTitle,
  changeDescription,
  changeAnonymous,
  creationDate,
  editionDate,
}) => {
  const onPress = () => {
    changeAnonymous(!anonymousUser);
    console.log(anonymousUser);
  };
  return (
    <View style={styleFormTitleDescription.container}>
      <Text style={styleFormTitleDescription.text}>Complaints' Title</Text>
      <Input value={title} onChangeText={changeTitle} title for the complaint />
      <Text style={styleFormTitleDescription.text}>
        Complaints' Description
      </Text>
      <TextInput
        style={styleFormTitleDescription.descriptionInput}
        multiline
        numberOfLines={7}
        editable
        value={description}
        onChangeText={changeDescription}
        maxLength={60}
        placeholder="Description for the complaint"
      />
      <View style={styleFormTitleDescription.containerCheckBox}>
        <CheckBox value={anonymousUser} onValueChange={onPress} />
        <Text>do you want to publish in anonymous way?</Text>
      </View>
      <View style={styleFormTitleDescription.containerDate}>
        <Text>Creation date: {creationDate}</Text>
        <Text>Edition date: {editionDate}</Text>
      </View>
    </View>
  );
};
export default FormTitleDescription;
