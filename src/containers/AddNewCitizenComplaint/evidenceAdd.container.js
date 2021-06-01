import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {PrimaryButton, DocumentImagePicker} from '../../components';
import {StyleAddEditContainer} from '../../library/styles/container';

const EvidenceAdd = props => {
  const next = () => {
    props.navigation.navigate('Home', {
      ...props.route.params,
    });
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
      <PrimaryButton text="Save" onPress={next} />
    </View>
  );
};
export default EvidenceAdd;
