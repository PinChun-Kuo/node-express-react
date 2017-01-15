import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import modal from '../components/modal';
import { getIssue, addIssueAction, editIssueAction } from '../actions/issueTableAction';

console.log(' modal : ', modal);

const totalActions = {
  getIssue: getIssue,
  addIssueAction: addIssueAction,
  editIssueAction: editIssueAction
};

// 將 state 绑定到 props
// This function is used to convert redux global state to desired props.
function mapStateToProps(state, ownProps) {
  console.log('state : ', state);
  console.log('ownProps : ', ownProps);
  return {
    updateIssue: state.updateIssue.issue,
    seq: ownProps.params.issueSeq
  };
}

// This function is used to provide callbacks to container component(i.e. issueTable here).
function mapDispatchToProps(dispatch) {
  return bindActionCreators(totalActions, dispatch);
}

// 通過react-redux 提供的 connect 方法將我們需要的 state 中的數據和 actions 中的方法绑定到 props 上
// We are using `connect` function to wrap our component with special component,
// which will provide to container all needed data.
export default connect(mapStateToProps, mapDispatchToProps)(modal);
