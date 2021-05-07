import SignUp from '../layouts';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

export default connect(
  ({}) => ({}),
  dispatch => bindActionCreators({}, dispatch),
)(SignUp);
