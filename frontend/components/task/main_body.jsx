import React from 'react';
import { Link } from 'react-router';
import TaskFormContainer from './task_form_container';

class mainBody extends React.Component{
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    if(!this.props.updateTasks) this.props.getAllTasks();
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.indexType !== this.props.indexType) nextProps.updateTasks();
  }

  render(){
    const allTasks =
            <ul>
              {this.props.tasks.map((task, idx) =>(
                <li key={idx}>{task.title}</li>
              )
              )}
            </ul>;
    return(
    <div>
      <TaskFormContainer />

      <br/>

      { allTasks }
    </div>
    );
  }
}

export default mainBody;
