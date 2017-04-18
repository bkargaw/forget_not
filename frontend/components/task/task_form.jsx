import React from 'react';
import {merge} from 'lodash';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import {SimpleSelect} from "react-selectize";
import 'react-dates/lib/css/_datepicker.css';
import 'react-selectize/themes/index.css';


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
      showStartDate: 'hidden',
      showEndDate: 'hidden',
      showEstimate: 'hidden',
      buttonStartDate: '',
      buttonEndDate: '',
      buttonEstimate: '',
      showStateChangers: 'hidden',
      doesNothing: '',
      focusedInput: null
      // list_id: this.props.list_id || ''
                  };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleShow = this.toggleShow.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.toggleBlur = this.toggleBlur.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    let startDate = new Date(this.state.startDate._d).getTime();
    let endDate = new Date(this.state.endDate._d).getTime();
    if(!startDate) startDate= '';
    if(!endDate) endDate = '';
    let task = merge({},this.state, {startDate}, {endDate});
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
      let dateToShow;
      let buttonToHide;
      if (val === 'start'){
        dateToShow = 'showStartDate';
        buttonToHide = 'buttonStartDate';
      }else if (val === 'end'){
        dateToShow = 'showEndDate';
        buttonToHide = 'buttonEndDate';
      }else if (val === 'estimate'){
        dateToShow = 'showEstimate';
        buttonToHide = 'buttonEstimate';
      }else if (val ==='wholeForm') {
        dateToShow = 'showStateChangers';
        buttonToHide = 'doesNothing';
      }

      if (this.state[dateToShow] === ''){
        this.setState({[dateToShow]: 'hidden'});
        this.setState({[buttonToHide]:''});
      }else if (val ==='wholeForm'){
        //do nothing
      }else
        this.setState({[buttonToHide]: 'hidden'});
        this.setState({[dateToShow]: ''});
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
      selectList= <select onChange={this.handleDateChange('list_id')}>
                    {this.props.lists.map(list => {
                      if(list.id === ListId){
                        return<option key={list.id}
                                      value={list.id}
                                      selected>
                              {list.name}
                        </option>;

                      }else{
                        return<option key={list.id}
                                value={list.id}>
                          {list.name}
                        </option>;
                      }
                    }
                  )}
                </select>;
      options = this.props.lists.map(list => (
        {label: list.name, value: list.id}
      )
      )
      SimpleSelectList = <SimpleSelect options = {options}
                                       placeholder = "Select a List">
                          </SimpleSelect>
    }

    return(
      <div className='addTaskForm'>
        <form onSubmit={ this.handleSubmit }>
          <input id='addTitle'
                 type='text'
                 placeholder=' Add a Task'
                 value={this.state.title}
                 onFocus={ this.toggleShow('wholeForm') }
                 onChange={ this.handleDateChange('title') } />

          <div className={this.state.showStateChangers}>
            <div className='addTaskButtons'>
              <div className='editButtons'>

                <DateRangePicker
                  startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                  endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                  onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
                  focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                  onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                />

              <button className={this.state.buttonEstimate}
                onClick={ this.toggleShow('estimate')}
                value='Add Estimate'>
                <p className='value'>Add Estimate</p>
                <i className="fa fa-arrows-h" aria-hidden="true"></i>
              </button>
              <label className={this.state.showEstimate} >{"Estimate:  "}
                <input onChange={this.handleDateChange('estimate')}
                       type='text'
                       placeholder='Add Estimate'/>
              </label>

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
