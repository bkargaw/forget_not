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
            <h6>{this.props.status.todayCout}</h6>
            <p>Due today</p>
          </li>
          <li>
            <h6>{this.props.status.overDueCout}</h6>
            <p>overdue</p>
          </li>
        </ul>
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
                    <p>{' ' + new Date(this.props.task.startDate)
                        .toDateString() }</p>
                  </li>;
      }
      if(this.props.task.endDate) {
        endTime =   <li>
                      <p className='first-child'>due</p>
                      <p>{' ' + new Date(this.props.task.endDate)
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
            <ul>
              <li> { startTime } </li>
              <li> { endTime } </li>
              <li> { estimate } </li>
              <li> { completed } </li>
              <li> { listType } </li>
            </ul>
          </div>

          <h3>Edit Task</h3>
          <form className='TaskEdit'
                onSubmit={ this.handleSubmit }>

            <label>
              <p>{"Title  "}</p>
              <input type='text'
                     placeholder={this.props.task.title}
                     onChange={ this.handleChange('title') } />
            </label>

            <label>
              <p> {'Start Date  '}</p>
              <input type='date'
                     onChange={this.handleChange('startDate')}/>
            </label>

            <label>
              <p>{"End Date  "}</p>
              <input type='date'
                      onChange={this.handleChange('endDate')}/>
            </label>

            <label>
              <p>{'Estimate  '}</p>
                <input onChange={this.handleChange('estimate')}
                       type='text'
                       placeholder='Add Estimate'/>
            </label>

            <label>
              <p>{'Select List Type  '}</p>
              <section>{ selectList }</section>
            </label>

            <label>
              <p>{'Completed:   '}</p>
              <section>{ completedOption }</section>
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
