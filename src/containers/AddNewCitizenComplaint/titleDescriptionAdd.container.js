import {
  FormTitleDescription,
  PrimaryButton,
  WrapperKeyboardAvoid,
} from '../../components';
import {Text, View} from 'react-native';

import React, {useState} from 'react';
import {StyleAddEditContainer} from '../../library/styles/container';
import moment from 'moment';
const TitleAdd = props => {
  const [title, setTitle] = useState(props.route.params?.title);
  const [description, setDescription] = useState(props.route.params?.description);
  const [anonymous, setAnonymous] = useState(props.route.params?.anonymous);
  const [creationDate] = useState(moment(new Date()).format('DD/MM/YYYY'));
  const [editionDate] = useState(moment(new Date()).format('DD/MM/YYYY'));

  const next = () => {
    props.navigation?.navigate('DateEventsAdd', {
      ...props.route.params,
      title,
      description,
      anonymous,
      creationDate,
      editionDate,
    });
    setTitle(''),
    setDescription('')
  };
  return (
    <WrapperKeyboardAvoid>
      <View style={StyleAddEditContainer.internalContainer}>
        <View>
          <Text style={StyleAddEditContainer.textHeader}>
            Title and Description
          </Text>
          <FormTitleDescription
            changeTitle={setTitle}
            title={title}
            changeDescription={setDescription}
            description={description}
            changeAnonymous={setAnonymous}
            anonymousUser={anonymous}
            creationDate={creationDate}
            editionDate={editionDate}
          />
        </View>
        {title?.length > 0 && description?.length > 0 && (
          <PrimaryButton text="Next" onPress={next} />
        )}
      </View>
    </WrapperKeyboardAvoid>
  );
};

export default TitleAdd;
