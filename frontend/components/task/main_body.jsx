import React from 'react';
import { Link } from 'react-router';
import TaskFormContainer from './task_form_container';

class mainBody extends React.Component{
  constructor(props) {
    super(props);
    this.state = {path: props.indexType};
  }

  componentDidMount(){
    if(this.props.getAllTasks){
      this.props.getAllTasks();
    }else {
      this.props.updateTasks();
    }
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.indexType !== this.props.indexType){
      nextProps.updateTasks();
      this.setState({path: nextProps.indexType});
    }
  }

  render(){
    const allTasks =
            <ul>
              {this.props.tasks.map((task, idx) =>(
                <li key={idx}>
                  <input type='checkbox'/>
                  <Link to={`tasks/${this.state.path}/${idx}`}>{task.title}</Link>
                </li>
              )
              )}
            </ul>;
    return(
    <div className='MAIN BODY CONTAINER'>
      <TaskFormContainer />

      <br/>

      { allTasks }

      {this.props.children}
    </div>
    );
  }
}

export default mainBody;
