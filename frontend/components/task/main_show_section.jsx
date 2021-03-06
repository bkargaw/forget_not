import React from 'react';
import { Link } from 'react-router';
import {merge} from 'lodash';
import { hashHistory } from 'react-router';
import EditTaskContainer from './edit_task_container';
import ShowListDetail from '../list_detail/list_detail_container';
import ShowCompleteness from '../show_completeness/show_completeness_container';
import { modal } from 'react-redux-modal';

class mainShowSection extends React.Component {
  constructor(props) {
    super(props);
  }

 componentWillReceiveProps(nextProps){
   if ( nextProps.params.taskId !== this.props.params.taskId){
      this.props.getTask(nextProps.params.taskId)
      .then(res => this.setState({title: res.title}));
   }
 }

 addModal(title, task, path, updateTask) {
   return () =>(
   modal.add(EditTaskContainer, {
     title: title,
     size: 'large', // large, medium or small,
     closeOnOutsideClick: false, // (optional) Switch to true
     // if you want to close the modal by clicking outside of it,
     hideTitleBar: false, // (optional) Switch to
     // true if do not want the default title bar and close button,
     hideCloseButton: false, // (optional) if you don't
     // wanna show the top right close button
     //.. all what you put in here you will get access in
     // the modal props ;)
     task: task,
     path: path,
     updateTask: updateTask
   })
 );
 }

  render(){
    let ranges= ['all', 'today', 'tomorrow','week']
    let showChart;
      if (ranges.includes(this.props.location.pathname.split('/')[2])){
        showChart =  <ShowListDetail />
      }else {
        showChart =  <ShowCompleteness />
      }
    if(this.props.status){
      return(
      <div className='totalShowSummery'>
        <h4>{this.props.title.replace(/\b\w/g, l => l.toUpperCase())}</h4>
        <ul className='ShowSummary'>
          <li>
            <h6>{this.props.status.count}</h6>
            <p>Tasks</p>
          </li>
          <li>
            <h6>{this.props.status.completedCount}</h6>
            <p>completed</p>
          </li>
          <li>
            <h6>{ this.props.status.todayCout}</h6>
            <p>Due today</p>
          </li>
          <li>
            <h6>{this.props.status.overDueCout}</h6>
            <p>overdue</p>
          </li>
        </ul>

        { showChart }
      </div>
      );

    }else if(this.props.task){
      let startTime;
      let endTime;
      let estimate;
      let completed;
      if(this.props.task.startDate) {
      startTime = <li>
                    <p className='first-child'>start</p>
                    <p>{' ' + new Date(this.props.task.startDate * 1000)
                        .toDateString() }</p>
                  </li>;
      }
      if(this.props.task.endDate) {
        endTime =   <li>
                      <p className='first-child'>due</p>
                      <p>{' ' + new Date(this.props.task.endDate * 1000)
                          .toDateString() }
                      </p>
                    </li>;
      }
      if(this.props.task.estimate) {
      estimate =  <li>
                   <p className='first-child'>estimate</p>
                   <p>{this.props.task.estimate }</p>
                  </li>;
      }
      if(this.props.task.completed) {
      completed = <li>
                   <p className='first-child'> completed </p>
                   <p>{`${this.props.task.completed}` }</p>
                  </li>;
      }

      let listType = <li>
                        <p className='first-child'>list</p>
                        <p>
                          {this.props.lists[this.props.task.list_id].name}
                        </p>
                  </li>;

      return(
        <div className='TaskShowEdit'>
          <div className='showTaskStaff'>
            <h4>{this.props.task.title}</h4>
            <ul>
              { startTime }
              { endTime }
              { estimate }
              { completed }
              { listType }
            </ul>
          </div>

        <button onClick={this.addModal('Edit Task', this.props.task,
                         this.props.location.pathname, this.props.updateTask)}>
               Edit Task
        </button>
        </div>
      );
    }else {
      return(
        <div></div>
      );
    }
  }
}


export default mainShowSection;
