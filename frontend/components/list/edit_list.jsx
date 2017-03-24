import React from 'react';
import { hashHistory } from 'react-router';
import {modal} from 'react-redux-modal';

class editList extends React.Component{
  constructor(props){
    super(props);
    this.state = ({name: this.props.name,
                  id: this.props.id});
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  removeThisModal() {
    this.props.removeModal();
  }

  handleSubmit(e){
    e.preventDefault();
    if(this.state.name){
      this.props.updateList(this.state)
      .then((res)=> hashHistory.push(`/tasks/${res.list.id}`))
      .then(()=> this.removeThisModal());
    }
  }

  update(e){
    e.preventDefault();
    this.setState({name: e.target.value});
  }

  render(){
  return(
      <form className='Modal' onSubmit={this.handleSubmit}>
        <label>{'Please enter a new list name:  '}
          <br/>
          <input type='text'
                 onChange={this.update}
                 value={this.state.name}/>
        </label>
        <input type='submit' value='Edit List'/>
      </form>
    );
  }
}
export default editList;
