import React from 'react';
import { hashHistory } from 'react-router';
import {modal} from 'react-redux-modal';

class addList extends React.Component{
  constructor(props){
    super(props);
    this.state = ({name: ''});
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  removeThisModal() {
    this.props.removeModal();
  }

  handleSubmit(e){
    e.preventDefault();
    if(this.state.name){
      this.props.createList(this.state)
      .then(()=> hashHistory.push('/tasks'))
      .then(()=> this.removeThisModal());
    }
  }

  update(e){
    e.preventDefault();
    this.setState({name: e.target.value});
  }

  render(){
  return(
      <form onSubmit={this.handleSubmit}>
        <label>Please enter a new list name:
          <input type='text'
                 onChange={this.update}
                 value={this.state.name}/>
        </label>
        <input type='submit' value='Add List'/>
      </form>
    );
  }
}
export default addList;
