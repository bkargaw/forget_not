import {connect} from 'react-redux';
import ListDetail from './list_detail';

const mapStateToProps = (state, ownProps)=>({
  tasks: Object.keys(state.tasks).map(id => state.tasks[id]),
  lists: state.lists
})


export default connect(
  mapStateToProps,
  null
)(ListDetail);
