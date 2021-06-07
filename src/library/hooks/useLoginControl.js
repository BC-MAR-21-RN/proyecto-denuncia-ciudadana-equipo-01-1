import {useEffect, useState} from 'react';

import {isValidEmail} from '../methods';
import {useInput} from '.';

const useLoginControl = (islogin, doLogin, signUp) => {
  const [propsName] = useInput('');
  const [propsEmail] = useInput('');
  const [propsPassword] = useInput('');
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
  });

  useEffect(() => {
    setErrors(error => ({...error, name: ''}));
  }, [propsName.value]);
  useEffect(() => {
    setErrors(error => ({...error, email: ''}));
  }, [propsEmail.value]);
  useEffect(() => {
    setErrors(error => ({...error, password: ''}));
  }, [propsPassword.value]);

  const submit = async e => {
    e.preventDefault();
    let _errors = {};
    _errors = {
      name: !islogin ? (!propsName.value ? 'Error name' : '') : '',
      email:
        !propsEmail.value || !isValidEmail(propsEmail.value)
          ? 'Error email'
          : '',
      password: !propsPassword.value ? 'Error password' : '',
    };

    if (_errors.email || _errors.password || (!islogin && _errors.name)) {
      setErrors(_errors);
      return;
    }

    if (islogin) {
      doLogin({email: propsEmail.value, password: propsPassword.value})
    } else {
      signUp({
        email: propsEmail.value,
        name: propsName.value,
        password: propsPassword.value,
      });
    }
  };
  return [propsName, propsEmail, propsPassword, errors, submit];
};

export default useLoginControl;
