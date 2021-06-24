import {DocumentImagePicker, PrimaryButton, Cam} from '../../components';
import {Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {StyleAddEditContainer} from '../../library/styles/container';
import {useFirebaseSaveComplaint} from '../../library/hooks';
const EvidenceAdd = props => {
  const [activateCam, setActivateCam] = useState(false);
  const {saveDataComplaints} = useFirebaseSaveComplaint(props.route.params);
  const next = () => {
    saveDataComplaints();
    props.navigation?.navigate('Home',{});
  };
  return (
    <View style={StyleAddEditContainer.internalContainer}>
      <View style={StyleAddEditContainer.internalContainer}>
        <Text style={StyleAddEditContainer.textHeader}>
          Evidence of the event
        </Text>
        {!activateCam && (
          <>
            <DocumentImagePicker />
            <Text style={StyleAddEditContainer.text}>Or</Text>
          </>
        )}
        <TouchableOpacity
          onPress={() => setActivateCam(!activateCam)}
          style={StyleAddEditContainer.buttonTouch}>
          <Text style={StyleAddEditContainer.text}>
            Cam {activateCam ? 'on' : 'off'}
          </Text>
        </TouchableOpacity>
        {activateCam && <Cam />}
      </View>
      <PrimaryButton text="Save" onPress={next} />
    </View>
  );
};
export default EvidenceAdd;
