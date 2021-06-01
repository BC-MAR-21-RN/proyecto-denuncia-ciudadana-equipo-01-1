import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {PrimaryButton, DocumentImagePicker} from '../../components';
import {StyleAddEditContainer} from '../../library/styles/container';

const EvidenceEdit = props => {
  const save = () => {
    consol.log("Saving")
  };
  return (
    <View style={StyleAddEditContainer.internalContainer}>
      <View style={StyleAddEditContainer.internalContainer}>
        <Text style={StyleAddEditContainer.textHeader}>Evidence of the event</Text>
        <DocumentImagePicker />
        <Text style={StyleAddEditContainer.text}>Or</Text>
        <TouchableOpacity
          onPress={() => console.log('open Cam')}
          style={StyleAddEditContainer.buttonTouch}>
          <Text style={StyleAddEditContainer.text}>Cam</Text>
        </TouchableOpacity>
      </View>
      <PrimaryButton text="Save" onPress={save} />
    </View>
  );
};
export default EvidenceEdit;
