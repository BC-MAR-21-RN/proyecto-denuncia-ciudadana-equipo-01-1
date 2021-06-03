import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Home from '../layout';

export default connect(
  ({}) => ({}),
  dispatch => bindActionCreators({}, dispatch),
)(Home);
