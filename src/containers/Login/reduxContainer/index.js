import {doLogin, googleAuthentication, signUp} from '../actions';

import AuthContent from '../layouts/authContent';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

export default connect(
  ({user}) => ({user}),
  dispatch =>
    bindActionCreators(
      {
        doLogin,
        signUp,
        googleAuthentication,
      },
      dispatch,
    ),
)(AuthContent);
