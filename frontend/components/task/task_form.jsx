import React from 'react';

class taskForm extends React.Component{
  constructor(props) {
    super(props);
    let now = new Date;
    this.state = {
      title: '',
      repeats: false,
      startDate: `2017-03-27`,
      // startDate: `${now.getFullYear()}-${now.getMonth()}-${now.getDate()}`,
      endDate: `2017-03-27`,
      // endDate: `${now.getFullYear()}-${now.getMonth()}-${now.getDate()}`,
      estimate: '',
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
    this.togglerepeats = this.togglerepeats.bind(this);
    this.toggleShow = this.toggleShow.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.toggleBlur = this.toggleBlur.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    debugger;
    this.props.createTask(this.state);
  }


  togglerepeats(feild){
    return e =>{
      e.preventDefault();
      this.setState({[feild]: !this.state[feild]});
    };
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
    return(
      <div
        onBlur={ this.toggleBlur() }>
        <form onSubmit={ this.handleSubmit }>
          <input type='text'
                 placeholder='Add a Task'
                 onFocus={ this.toggleShow('wholeForm') }
                 onChange={ this.handleDateChange('title') } />
          <input type='submit' value= 'Add Task'/>

        <div className={this.state.showStateChangers}>
            <button onClick={ this.togglerepeats('repeats')}>
              <i className="fa fa-repeat" aria-hidden="true"/>
            </button>

            <button className={this.state.buttonStartDate}
                    onClick={ this.toggleShow('start') }
                    value='Add Start Date'>

              <i className="fa fa-play" aria-hidden="true"></i>
            </button>

            <input className={this.state.showStartDate}
                   type='date'
                   onChange={this.handleDateChange('startDate')}/>

            <button className={this.state.buttonEndDate}
                    onClick={ this.toggleShow('end')}
                    value='Add End Date'>
              <i className="fa fa-stop-circle-o" aria-hidden="true"></i>
            </button>

            <input  className={this.state.showEndDate}
                    type='date'
                    onChange={this.handleDateChange('endDate')}/>

              <button className={this.state.buttonEstimate}
                onClick={ this.toggleShow('estimate')}
                value='Add Estimate'>
                <i className="fa fa-arrows-h" aria-hidden="true"></i>
              </button>

              <input className={this.state.showEstimate}
                     onChange={this.handleDateChange('estimate')}
                     type='text'
                     placeholder='Add Estimate'/>
            </div>
        </form>
      </div>
    );
  }
}

export default taskForm;
