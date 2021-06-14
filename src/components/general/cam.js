import React, {PureComponent} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import {RNCamera} from 'react-native-camera';
import {styleCam} from '../../library/styles';

const PendingView = () => (
  <View style={styleCam.pending}>
    <Text>Waiting</Text>
  </View>
);

class Cam extends PureComponent {
  render() {
    return (
      <View style={styleCam.container}>
        <RNCamera
          style={styleCam.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permission to use audio recording',
            message: 'We need your permission to use your audio',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}>
          {({camera, status, recordAudioPermissionStatus}) => {
            if (status !== 'READY') return <PendingView />;
            return (
              <View style={styleCam.containerButton}>
                <TouchableOpacity
                  onPress={() => this.takePicture(camera)}
                  style={styleCam.capture}>
                  <Text style={styleCam.textSnap}> SNAP </Text>
                </TouchableOpacity>
              </View>
            );
          }}
        </RNCamera>
      </View>
    );
  }

  takePicture = async function (camera) {
    const options = {quality: 0.5, base64: true};
    const data = await camera.takePictureAsync(options);
    console.log(data.uri);
  };
}

export default Cam;
