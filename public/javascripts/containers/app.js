import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Table from '../components/table';
import { addItemAction, editItemAction, deleteItemAction, openPopModal, closePopModal } from '../actions/tableAction';

const totalActions = {
  addItemAction: addItemAction,
  editItemAction: editItemAction,
  deleteItemAction: deleteItemAction,
  openPopModal: openPopModal,
  closePopModal: closePopModal
};

// 將 state 绑定到 props
function mapStateToProps(state) {
  return {
    dataList: state.dataList,
    modalShow: state.modalShow,
    updateRow: state.updateRow
  };
}

// 將 action 的所有方法绑定到 props 上
function mapDispatchToProps(dispatch) {
  return bindActionCreators(totalActions, dispatch);
}

// 通過react-redux 提供的 connect 方法將我們需要的 state 中的數據和 actions 中的方法绑定到 props 上
export default connect(mapStateToProps, mapDispatchToProps)(Table);
