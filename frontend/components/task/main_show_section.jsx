import React from 'react';
import { Link } from 'react-router';
import {merge} from 'lodash';
import { hashHistory } from 'react-router';


class mainShowSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
                  title: '',
                  repeats: false,
                  startDate: ``,
                  endDate: ``,
                  estimate: '',
                  list_id: 1,
                  completed: false
                  };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }


 componentWillReceiveProps(nextProps){
   if ( nextProps.params.taskId !== this.props.params.taskId){
      this.props.getTask(nextProps.params.taskId)
      .then(res => this.setState({title: res.title}));
   }
 }

 handleSubmit(e){
   e.preventDefault();
   let startDate = new Date(this.state.startDate).getTime();
   let endDate = new Date(this.state.endDate).getTime();
   if(!startDate) startDate= '';
   if(!endDate) endDate = '';
   let title = this.state.title;
   if (title === '') title = this.props.task.title;
   let task = merge({},this.state, {startDate},
                    {endDate}, {title}, {id: this.props.task.id});
                    debugger;

   this.props.updateTask(task)
              .then(()=> hashHistory.push(this.props.location.pathname));
   this.setState( {
                 title: this.props.task.title,
                 startDate: ``,
                 endDate: ``,
                 estimate: ''
               });
 }

 handleChange(feild){
   return e =>{
       this.setState({[feild]: e.target.value});
     };
 }

  render(){
    if(this.props.status){
      return(
      <div className='totalShowSummery'>
        <h4>{this.props.title}</h4>
        <ul className='ShowSummary'>
          <li>count {this.props.status.count}</li>
          <li>completed {this.props.status.completedCount}</li>
          <li>todayCount {this.props.status.todayCout}</li>
          <li>overDueCount {this.props.status.overDueCout}</li>
        </ul>
      </div>
      );

    }else if(this.props.task){
      let startTime;
      let endTime;
      let estimate;
      let completed;
      if(this.props.task.startDate) {
      startTime = <p>Start Date: {' ' + new Date(this.props.task.startDate).toDateString() }</p>;
      }
      if(this.props.task.endDate) {
      endTime = <p>End Date: {' ' + new Date(this.props.task.endDate).toDateString() }</p>;
      }
      if(this.props.task.estimate) {
      estimate = <p>Estimate Duration: {this.props.task.estimate }</p>;
      }
      if(this.props.task.completed) {
      completed = <p>Completed: {this.props.task.completed }</p>;
      }

      let selectList= <select onChange={this.handleChange('list_id')}>

        {Object.keys(this.props.lists).map(id =>
                     this.props.lists[id]).map(list => {
                      let sel ='';
                      if (list.id === this.props.task.list_id){
                        return(<option key={list.id}
                                       value={list.id}
                                       selected>
                                  {list.name}
                               </option>);
                      }else {
                        return(<option key={list.id}
                                       value={list.id}>
                                  {list.name}
                                </option>);
                      }

                  })}
                </select>;

  let completedOption= <select defaultValue={this.props.task.completed}
                              onChange={this.handleChange('completed')}>
                           <option key={1}
                                   value={true}>
                              {'true'}
                           </option>
                           <option key={2}
                                   value={false}>
                              {'false'}
                           </option>
                       </select>;

      return(
        <div className='TaskShowEdit'>
          <div className='showTaskStaff'>
          <h4>{this.props.task.title}</h4>
          { startTime }
          { endTime }
          { estimate }
          { completed }
          <p>List Type: {this.props.lists[this.props.task.list_id].name}</p>
        </div>
          <h3>Edit Task</h3>
          <form className='TaskEdit'
                onSubmit={ this.handleSubmit }>

            <label>{"Title  "}
              <input type='text'
                     placeholder={this.props.task.title}
                     onChange={ this.handleChange('title') } />
            </label>

            <label>{'Start Date  '}
              <input type='date'
                     onChange={this.handleChange('startDate')}/>
            </label>

            <label>{"End Date  "}
              <input type='date'
                      onChange={this.handleChange('endDate')}/>
            </label>

            <label>{'Estimate  '}
                <input onChange={this.handleChange('estimate')}
                       type='text'
                       placeholder='Add Estimate'/>
            </label>

            <label>{'Select List Type  '}
                { selectList }
            </label>
            <label>{'Completed ? :'}
              { completedOption }
            </label>

            <input type='submit' value= 'Update Task'/>
          </form>

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
