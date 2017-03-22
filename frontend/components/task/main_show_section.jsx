import React from 'react';
import { Link } from 'react-router';
import {merge} from 'lodash';


class mainShowSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
                  title: '',
                  repeats: false,
                  startDate: ``,
                  endDate: ``,
                  estimate: ''
                  };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }


 componentWillReceiveProps(nextProps){
   if ( nextProps.params.taskId !== this.props.params.taskId){
      this.props.getTask(nextProps.params.taskId);

   }
 }

 handleSubmit(e){
   e.preventDefault();
   debugger;
   let startDate = new Date(this.state.startDate).getTime();
   let endDate = new Date(this.state.endDate).getTime();
   if(!startDate) startDate= '';
   if(!endDate) endDate = '';
   let task = merge({},this.state, {startDate},
                    {endDate},{id: this.props.task.id});
   this.props.updatTask(task);
   this.setState( {
                 title: '',
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
        <ul>
          <h4>{this.props.title}</h4>
          <li>count {this.props.status.count}</li>
          <li>completed {this.props.status.completedCount}</li>
          <li>todayCount {this.props.status.todayCout}</li>
          <li>overDueCount {this.props.status.overDueCout}</li>
        </ul>
      );

    }else if(this.props.task){
      let startTime;
      let endTime;
      let estimate;
      if(this.props.task.startDate) {
      startTime = <p>Start Date: { new Date(this.props.task.startDate).toDateString() }</p>;
      }
      if(this.props.task.endDate) {
      endTime = <p>End Date: { new Date(this.props.task.endDate).toDateString() }</p>;
      }
      if(this.props.task.estimate) {
      estimate = <p>Estimate Duration: {this.props.task.estimate }</p>;
      }

      return(
        <div>
          <h4>{this.props.task.title}</h4>
          { startTime }
          { endTime }
          { estimate }

            <h3>Edit Task</h3>
          <form onSubmit={ this.handleSubmit }>

            <label>Tilte
              <input type='text'
                     placeholder={this.props.task.title}
                     onChange={ this.handleChange('title') } />
            </label>

            <label>Start Date
              <input className={this.state.showStartDate}
                     type='date'
                     onChange={this.handleChange('startDate')}/>
            </label>

            <label>End Date
              <input  className={this.state.showEndDate}
                      type='date'
                      onChange={this.handleChange('endDate')}/>
            </label>

            <label>Estimate
                <input className={this.state.showEstimate}
                       onChange={this.handleChange('estimate')}
                       type='text'
                       placeholder='Add Estimate'/>
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
