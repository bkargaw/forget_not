import React from 'react';
import {merge} from 'lodash';


class taskForm extends React.Component{
  constructor(props) {
    super(props);
    let now = new Date;
    this.state = {
      title: '',
      startDate: ``,
      // startDate: `${now.getFullYear()}-${now.getMonth()}-${now.getDate()}`,
      endDate: ``,
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
      doesNothing: ''
      // list_id: this.props.list_id || ''
                  };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleShow = this.toggleShow.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.toggleBlur = this.toggleBlur.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    let startDate = new Date(this.state.startDate).getTime();
    let endDate = new Date(this.state.endDate).getTime();
    if(!startDate) startDate= '';
    if(!endDate) endDate = '';
    let task = merge({},this.state, {startDate}, {endDate});
    this.props.createTask(task);
    this.setState( {
                  title: '',
                  startDate: ``,
                  endDate: ``,
                  estimate: '',
                  list_id: 1
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
    if(this.props.lists.length){
      selectList= <select onChange={this.handleDateChange('list_id')}>
                    {this.props.lists.map(list => (
                      <option key={list.id}
                              value={list.id}>
                        {list.name}
                      </option>
                    )
                  )}
                </select>;
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
            <button className={this.state.buttonStartDate}
                    onClick={ this.toggleShow('start') }
                    value='Add Start Date'>
              <p className='value'>Add Start Date</p>
              <i className="fa fa-play" aria-hidden="true"></i>
            </button>

            <label className={this.state.showStartDate}>{"Start Date:  "}
              <input type='date'
                     onChange={this.handleDateChange('startDate')}/>
            </label>

            <button className={this.state.buttonEndDate}
                    onClick={ this.toggleShow('end')}
                    value='Add End Date'>
              <p className='value'>end Start Date</p>
              <i className="fa fa-stop-circle-o" aria-hidden="true"></i>
            </button>

            <label className={this.state.showEndDate} >{"End Date:  "}
              <input  type='date'
                      onChange={this.handleDateChange('endDate')}/>
            </label>

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

               <label>{"Add to a list  "}
                 {selectList}
               </label>
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
