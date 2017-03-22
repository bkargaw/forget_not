import React from 'react';
import { Link, hashHistory } from 'react-router';
import TaskFormContainer from './task_form_container';

class mainBody extends React.Component{
  constructor(props) {
    super(props);
    this.state = { path: props.indexType,
                   DeletList: [],
                   ShowButton: 'hidden'
                 };
    this.handelDelete = this.handelDelete.bind(this);
  }

  componentDidMount(){
    if(this.props.getAllTasks){
      this.props.getAllTasks();
    }else {
      this.props.updateTasks();
    }
  }

  handelDelete(){
      let DeletList = this.state.DeletList;
      DeletList.forEach(id => this.props.deleteTask(id));
      hashHistory.push(this.props.route.path);
  }

  updateDeleteList(id){
    return( e =>{
      let DeletList = this.state.DeletList;
      let index = DeletList.indexOf(id);
      if (index > -1) {
        DeletList.splice(index, 1);
      }else{
        DeletList.push(id);
      }
      this.setState({ DeletList, ShowButton: '' });
    }
  );
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
                  <input type='checkbox'
                    onClick={this.updateDeleteList(task.id)}/>
                  <Link to={`tasks/${this.state.path}/${task.id}`}>
                    {task.title}
                  </Link>
                </li>
              )
              )}
            </ul>;
    return(
    <div className='MAINBODYCONTAINER'>
      <section  className= 'mainbodySection'>
        <TaskFormContainer />
        <br/>
        <button onClick= { this.handelDelete}
                value='Delete Tasks'>
           Delete Tasks
         </button>
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
