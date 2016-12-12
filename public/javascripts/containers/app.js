import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import IssueTable from '../components/issueTable';
import { addIssueAction, editIssueAction, deleteIssueAction, openPopModal, closePopModal } from '../actions/issueTableAction';

const totalActions = {
  addIssueAction: addIssueAction,
  editIssueAction: editIssueAction,
  deleteIssueAction: deleteIssueAction,
  openPopModal: openPopModal,
  closePopModal: closePopModal
};

// 將 state 绑定到 props
function mapStateToProps(state) {
  return {
    issues: state.issues,
    modalShow: state.modalShow,
    updateIssue: state.updateIssue
  };
}

// 將 action 的所有方法绑定到 props 上
function mapDispatchToProps(dispatch) {
  return bindActionCreators(totalActions, dispatch);
}

// 通過react-redux 提供的 connect 方法將我們需要的 state 中的數據和 actions 中的方法绑定到 props 上
export default connect(mapStateToProps, mapDispatchToProps)(IssueTable);
