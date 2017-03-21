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
      let path = nextProps.location.pathname.split('/');
      let indexType;
      if(path[0].length === 0 ){
        indexType = path[path.length -1];
      }else {
        indexType = path[path.length -2];
      }
      this.setState({path: indexType});
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
    <div className='MAINBODYCONTAINER'>
      <section  className= 'mainbodySection'>
        <TaskFormContainer />
        <br/>
        { allTasks }
      </section>

      <section  className= 'mainShowSection'>
        {this.props.children}
      </section>
    </div>
    );
  }
}

export default mainBody;
