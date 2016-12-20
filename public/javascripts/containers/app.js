import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import IssueTable from '../components/issueTable';
import { getIssues, addIssueAction, editIssueAction, deleteIssueAction, openPopModal, closePopModal } from '../actions/issueTableAction';

const totalActions = {
  getIssues: getIssues,
  addIssueAction: addIssueAction,
  editIssueAction: editIssueAction,
  deleteIssueAction: deleteIssueAction,
  openPopModal: openPopModal,
  closePopModal: closePopModal
};

// 將 state 绑定到 props
// This function is used to convert redux global state to desired props.
function mapStateToProps(state) {
  return {
    renderData: state.renderData,
    modalShow: state.modalShow,
    updateIssue: state.updateIssue
  };
}

// This function is used to provide callbacks to container component(i.e. issueTable here).
function mapDispatchToProps(dispatch) {
  return bindActionCreators(totalActions, dispatch);
}

// 通過react-redux 提供的 connect 方法將我們需要的 state 中的數據和 actions 中的方法绑定到 props 上
// We are using `connect` function to wrap our component with special component,
// which will provide to container all needed data.
export default connect(mapStateToProps, mapDispatchToProps)(IssueTable);
