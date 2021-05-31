import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {PrimaryButton, DocumentImagePicker} from '../../components';
import {generalContainer} from './styleAddContainer';

const EvidenceAdd = props => {
  const next = () => {
    props.navigation.navigate('Home', {
      ...props.route.params,
    });
  };
  return (
    <View style={generalContainer.internalContainer}>
      <View style={generalContainer.internalContainer}>
        <Text style={generalContainer.textHeader}>Evidence of the event</Text>
        <DocumentImagePicker />
        <Text style={generalContainer.text}>Or</Text>
        <TouchableOpacity
          onPress={() => console.log('open Cam')}
          style={generalContainer.buttonTouch}>
          <Text style={generalContainer.text}>Cam</Text>
        </TouchableOpacity>
      </View>
      <PrimaryButton text="Save" onPress={next} />
    </View>
  );
};
export default EvidenceAdd;
