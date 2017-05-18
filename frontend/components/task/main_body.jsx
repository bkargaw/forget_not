import React from 'react';
import { Link, hashHistory } from 'react-router';
import TaskFormContainer from './task_form_container';
import {merge} from 'lodash';
import { Nav, NavItem } from 'react-bootstrap';



class mainBody extends React.Component{
  constructor(props) {
    super(props);
    this.state = { path: this.props.indexType,
                   TasksToUpdate: [],
                   whichTab: 'Incomplete',
                   filter: false
                 };
    this.handelDelete = this.handelDelete.bind(this);
    this.handelMarkAsComplete = this.handelMarkAsComplete.bind(this);
    this.showIncomplete = this.showIncomplete.bind(this);
    this.showComplete = this.showComplete.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handelSingDelete = this.handelSingDelete.bind(this);

  }

  componentDidMount(){
    if (this.props.params.listId){
     this.props.updateTasks(this.props.params.listId);
    }else if(this.props.getAllTasks){
      this.props.getAllTasks();
    }else {
      this.props.updateTasks();
    }
  }

  componentWillReceiveProps(nextProps){
    let path = nextProps.location.pathname.split('/');
    if(nextProps.indexType !== this.props.indexType && path[1] ==='tasks'){
      if (nextProps.params.listId){
        nextProps.updateTasks(nextProps.params.listId);
      } else if(parseInt(nextProps.indexType) && parseInt(path[1])) {
        nextProps.updateTasks(parseInt(nextProps.indexType));
      }else {
        nextProps.updateTasks();
      }

      let indexType;
      if(path[0].length === 0 ){
        indexType = path[path.length -1];
      }else {
        indexType = path[path.length -2];
      }
      this.setState({path: indexType});
    }

    let listId = nextProps.params.listId;
    let taskId = nextProps.params.taskId;
    let thisTask = this.props.tasks.find(el => el.id === parseInt(taskId));
    let nextTask = nextProps.tasks.find(el => el.id === parseInt(taskId));
    if(taskId && nextTask && (thisTask.list_id !== nextTask.list_id)){
      nextProps.updateTasks(thisTask.list_id);
    }

    if (path[2] === 'search' && nextProps.indexType !== this.props.indexType){
      nextProps.updateTasks();
    }

  }

  handelDelete(){
    let TasksToUpdate = this.state.TasksToUpdate;
    TasksToUpdate.forEach(id => this.props.deleteTask(id));
    hashHistory.push(this.props.route.path);
    this.setState({path: this.props.indexType,
                   TasksToUpdate: []});
  }

  handelSingDelete(id){
    return ()=>{
      this.props.deleteTask(id);
      this.removeFromTaskUpdate(id);
    }
  }

  removeFromTaskUpdate(id){
    var index = this.state.TasksToUpdate.indexOf(id);
    if(index > -1){
      let TasksToUpdate = this.state.TasksToUpdate.splice(index, 1);
      this.setState({TasksToUpdate});
    }
  }


  handelMarkAsComplete(){
    let tasks =  Object.keys(this.props.tasks).map(id => this.props.tasks[id]);
    let selectedTasks = tasks.filter(task =>
                        this.state.TasksToUpdate.includes(task.id));
    let that = this;
    selectedTasks.forEach(task =>{
      merge(task, {completed: !(that.state.filter)});
      that.props.updateTask(task);
    });
    hashHistory.push(this.props.route.path);
    this.setState({path: this.props.indexType,
                   TasksToUpdate: []});

  }

  handelSingleMarkAsComplete(id){
    let that = this;
    let tasks =  Object.keys(this.props.tasks).map(task_id => this.props.tasks[task_id]);
    let task = tasks.filter(task =>
                        [id].includes(task.id));
        task = task[0];
    return () =>{
      this.removeFromTaskUpdate(id)
      merge(task, {completed: !(that.state.filter)});
      that.props.updateTask(task);
    }
  }


  updateDeleteList(id){
    let that = this;
    return( e =>{
      let TasksToUpdate = that.state.TasksToUpdate;
      let index = TasksToUpdate.indexOf(id);
      if (index > -1) {
        TasksToUpdate.splice(index, 1);
      }else{
        TasksToUpdate.push(id);
      }
      that.setState({ TasksToUpdate });
    }
  );
  }


  showIncomplete(selectedKey){
    this.setState({filter: false});
    this.setState({whichTab: 'Incomplete'});
  }

  showComplete(selectedKey){
    this.setState({filter: true});
    this.setState({whichTab: 'Complete'});
  }

  handleSelect(selectedKey){
    if (selectedKey == 'Complete') this.showComplete(selectedKey)
    if (selectedKey == 'Incomplete') this.showIncomplete(selectedKey)
  }

  is_empty(){
    let check = true;
    this.props.tasks.forEach((task) =>{
      if (task.completed === this.state.filter){
        check = false;
      }
    })
    return check;
  }

  render(){
    let allTasks;
    let checkMarkMessage;

      if (this.is_empty()) {
        if(this.state.filter){
          allTasks = <div className='empty_list'>You have no Complete Task in this category!! </div>
        }else {
          allTasks = <div className='empty_list'>You have no more Incomplete Task in this category!! </div>
        }
      }else {
        if(this.state.filter){
          checkMarkMessage = "mark Incomplete";
        }else {
          checkMarkMessage = "mark Complete";
        }
        allTasks =
        <div>
          <ul className='TaskListHolder'>
            {this.props.tasks.map((task, idx) =>{
              if (task.completed === this.state.filter){
                return(
                  <div key={idx+'check'} className='TaskList'>
                    <input
                      type='checkbox'
                      onClick={this.updateDeleteList(task.id)}/>
                    <Link key={idx} to={`tasks/${this.state.path}/${task.id}`}>
                      <li >
                        {task.title}
                      </li>
                    </Link>
                    <div className='DeleteAction TaskCheckMarkMessage1'>
                      <i id='massIcons'
                         onClick= { this.handelSingDelete(task.id) }
                         className="fa fa-trash fa-lg" aria-hidden="true">
                      </i>
                      <p>Delete Task</p>
                    </div>
                    <div className={'CompleteAction TaskCheckMarkMessage2'}>
                      <i id="massIcons"
                         onClick= { this.handelSingleMarkAsComplete(task.id) }
                         className="fa fa-check-square fa-lg" aria-hidden="true">
                      </i>
                      <p className= "TaskCheckMarkMessage" >{ checkMarkMessage }</p>
                    </div>
                  </div>
                );
              }
            }
            )}
          </ul>
        </div>;
      }

    return(
    <div className='MAINBODYCONTAINER'>
      <section  className= 'mainbodySection'>
        <div className= 'nav_tabs_holder'>
          <div></div>
          <Nav bsStyle="tabs" justified activeKey={this.state.whichTab} onSelect={this.handleSelect}>
            <NavItem eventKey={'Incomplete'} >Incomplete</NavItem>
            <NavItem eventKey={'Complete'} >Complete</NavItem>
          </Nav>
        </div>
       <div className='mainPageHeaders'>
        <div className='TheMassAssingnButtons'>
          <div className='DeleteAction'>
            <i id='massIcons'
               onClick= { this.handelDelete }
               className="fa fa-trash fa-2x" aria-hidden="true">
           </i>
            <p>Delete Tasks</p>
          </div>

          <div className={'CompleteAction'}>
            <i id="massIcons"
               onClick= { this.handelMarkAsComplete }
               className="fa fa-check-square fa-2x" aria-hidden="true">
            </i>
            <p>{ checkMarkMessage }</p>
          </div>
        </div>
        </div>
        <TaskFormContainer indexType={this.props.indexType}/>
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
