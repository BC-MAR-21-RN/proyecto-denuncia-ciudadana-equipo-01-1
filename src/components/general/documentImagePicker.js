import React from 'react';
import DocumentPicker from 'react-native-document-picker';
import {View, Text, TouchableOpacity} from 'react-native';
import {styleDocumentPicker} from '../../library/styles';

const DocumentImagePicker = () => {
  const OpenDocumentFile = async () => {
    try {
      const results = await DocumentPicker.pickMultiple({
        type: [
          DocumentPicker.types.images,
          DocumentPicker.types.pdf,
          DocumentPicker.types.video,
        ],
      });
      for (const res of results) {
        console.log(
          res.uri,
          res.type, // mime type
          res.name,
          res.size,
        );
      }
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker, exit any dialogs or menus and move on
      } else {
        throw err;
      }
    }
  };
  return (
    <View style={styleDocumentPicker.container}>
      <TouchableOpacity
        onPress={() => OpenDocumentFile()}
        style={styleDocumentPicker.buttonTouch}>
        <Text style={styleDocumentPicker.text}>Select your document</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DocumentImagePicker;
