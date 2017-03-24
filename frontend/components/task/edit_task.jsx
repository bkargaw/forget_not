import React from 'react';
import { Link } from 'react-router';
import {merge} from 'lodash';
import { hashHistory } from 'react-router';
import {modal} from 'react-redux-modal';


class EditTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
                  title: this.props.task.title,
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

  removeThisModal() {
    this.props.removeModal();
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

    this.props.updateTask(task)
              .then(()=> hashHistory.push(this.props.path))
              .then(()=> this.removeThisModal());
              
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
    );
  }else {
    return <div></div>;
  }
  }

}

export default EditTask;
