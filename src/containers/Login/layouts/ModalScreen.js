import {ModalLayout} from '../../../components';
import React from 'react';
import {useRedirect} from '../../../library/hooks';

const ModalScreen = props => {
  useRedirect(props);
  const {error, loading, message} = props;
  console.log('THIS ARE THE PROPS', message);
  if (!error && !loading && !message) return <></>;
  return <ModalLayout text={message} />;
};

export default ModalScreen;
