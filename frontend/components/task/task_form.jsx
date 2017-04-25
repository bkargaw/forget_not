import React from 'react';
import {merge} from 'lodash';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import {SimpleSelect} from "react-selectize";
import 'react-dates/lib/css/_datepicker.css';


class taskForm extends React.Component{
  constructor(props) {
    super(props);
    let now = new Date;
    this.state = {
      title: '',
      startDate: null,
      // startDate: `${now.getFullYear()}-${now.getMonth()}-${now.getDate()}`,
      endDate: null,
      // endDate: `${now.getFullYear()}-${now.getMonth()}-${now.getDate()}`,
      estimate: '',
      list_id: 1,
      showStateChangers: 'hidden',
      focusedInput: null
      // list_id: this.props.list_id || ''
                  };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleShow = this.toggleShow.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    let startDate = '';
    let endDate = '';
    let list_id = 1;
    if(!(this.state.list_id == 1)) list_id = this.state.list_id.value;
    if(this.state.startDate) startDate = new Date(this.state.startDate._d).getTime();
    if(this.state.endDate) endDate = new Date(this.state.endDate._d).getTime();
    let task = merge({},this.state, {list_id},  {startDate}, {endDate});
    this.props.createTask(task);
    this.setState( {
                  title: '',
                  startDate: ``,
                  endDate: ``,
                  estimate: '',
                  list_id: 1,
                  showStateChangers: 'hidden'
                });
  }

  toggleShow(val){
    return( e=>{
    e.preventDefault();
      if (this.state[val] === ''){
        this.setState({[val]: 'hidden'});
      }else
        this.setState({[val]: ''});
  });
  }

  toggleBlur(){
    return( e=>{
      this.setState({showStateChangers: 'hidden'});
    });
  }

  handleDateChange(feild){
    return e =>{
        this.setState({[feild]: e.target.value});
      };
  }

  render(){
    let selectList;
    let ListId = 1;
    let options;
    let SimpleSelectList;
    var self = this;
    if(this.props.lists.length){
      if ( parseInt(this.props.indexType) ){
        ListId =  parseInt(this.props.indexType);
      }
      options = this.props.lists.map(list => (
        {label: list.name, value: list.id}
      )
      )
    }

    return(
      <div className='addTaskForm'>
        <form onSubmit={ this.handleSubmit }>
          <input id='addTitle'
                 type='text'
                 placeholder=' Add a Task'
                 value={this.state.title}
                 onFocus={ this.toggleShow('showStateChangers') }
                 onChange={ this.handleDateChange('title') } />

          <div className={this.state.showStateChangers}>
            <div className='addTaskButtons'>
              <div className='editButtons'>

                <DateRangePicker
                  startDate={this.state.startDate}
                  endDate={this.state.endDate}
                  onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })}
                  focusedInput={this.state.focusedInput}
                  onFocusChange={focusedInput => this.setState({ focusedInput })}
                />
              <input onChange={this.handleDateChange('estimate')}
                       type='text'
                       placeholder='Add Estimate'/>

                {SimpleSelectList}

              </div>
              <input type='submit' value= 'Add Task'/>
              </div>
            </div>

        </form>
      </div>
    );
  }
}

export default taskForm;
