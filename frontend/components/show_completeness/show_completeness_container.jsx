import {connect} from 'react-redux';
import ShowCompleteness from './show_completeness';

const mapStateToProps = (state, ownProps)=>{
  debugger

  return
  ({
    tasks: Object.keys(state.tasks).map(id => state.tasks[id])
  })
}




export default connect(
  mapStateToProps,
  null
)(ShowCompleteness);
