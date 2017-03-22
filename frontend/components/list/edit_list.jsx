import React from 'react';
import { hashHistory } from 'react-router';
import {modal} from 'react-redux-modal';

class editList extends React.Component{
  constructor(props){
    super(props);
    debugger;
    this.state = ({name: this.props.name});
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
export default editList;
