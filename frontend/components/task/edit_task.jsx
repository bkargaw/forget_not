import React from 'react';
import { Link } from 'react-router';
import {merge} from 'lodash';
import { hashHistory } from 'react-router';
import {modal} from 'react-redux-modal';

import moment from 'moment';

import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';


class EditTask extends React.Component {
  constructor(props) {
    super(props);
    let startDate = this.props.task.startDate;
    let endDate = this.props.task.endDate;
    if (startDate) startDate = moment(new Date(startDate * 1000));
    if (endDate) endDate = moment(new Date(endDate * 1000));
    this.state = {
                  title: this.props.task.title,
                  repeats: false,
                  startDate,
                  endDate,
                  estimate: this.props.task.estimate,
                  list_id: this.props.task.list_id,
                  completed: this.props.task.completed
                  };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  removeThisModal() {
    this.props.removeModal();
  }

  handleSubmit(e){
    e.preventDefault();
    let startDate = '';
    let endDate = '';
    if(this.state.startDate) startDate = new Date(this.state.startDate._d).getTime() / 1000;
    if(this.state.endDate) endDate = new Date(this.state.endDate._d).getTime() / 1000;
    let title = this.state.title;
    let task = merge({},this.state, {startDate},
                     {endDate}, {title}, {id: this.props.task.id});
    this.props.updateTask(task)
              .then(()=> hashHistory.push(this.props.path))
              .then(()=> this.removeThisModal());

    this.setState( {
                  title: '',
                  startDate: null,
                  endDate: null,
                  estimate: ''
                });
  }

  handleChange(feild){
    return e =>{
        this.setState({[feild]: e.target.value});
      };
  }

  render(){
    if(this.props.task){

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
      <form className='TaskEdit'
            onSubmit={ this.handleSubmit }>

        <label>
          <p>{"Title:  "}</p>
            <section><input type='text'
                 value = {this.state.title}
                 onChange={ this.handleChange('title') } /></section>
        </label>

        <label id={'DateRangePicker'}>
           <DateRangePicker
             startDate={this.state.startDate}
             endDate={this.state.endDate}
             onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })}
             focusedInput={this.state.focusedInput}
             onFocusChange={focusedInput => this.setState({ focusedInput })}
           />
       </label>

        <label>
          <p>{'Estimate:  '}</p>
              <section><input onChange={this.handleChange('estimate')}
                   type='text'
                   value={this.state.estimate}
                   placeholder='Add Estimate'/></section>
        </label>

        <label>
          <p>{'Select List Type:  '}</p>
          <section>{ selectList }</section>
        </label>

        <label>
          <p>{'Completed:   '}</p>
          <section>{ completedOption }</section>
        </label>

        <input type='submit' value= 'Update Task'/>
      </form>
    );
  }else {
    return <div></div>;
  }
  }

}

export default EditTask;
