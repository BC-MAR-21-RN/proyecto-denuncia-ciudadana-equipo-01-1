import { ModalLayout } from '../../../components';
import React from 'react';
import { useRedirect } from '../../../library/hooks';

const ModalScreen = props => {
  useRedirect(props);
  const { error, loading, message } = props;

  if (!error && !loading && !message) 
  return <></>;
  return <ModalLayout text={message} />;
};

export default ModalScreen;
