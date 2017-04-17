import React from 'react';
import { hashHistory } from 'react-router';
import {modal} from 'react-redux-modal';

class removeList extends React.Component{
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  removeThisModal() {
    this.props.removeModal();
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.deleteList(this.props.id)
    .then(()=> hashHistory.push('/tasks/all'))
    .then(()=> this.removeThisModal());
  }


  render(){
    // let countMSG;
    // if(this.props.mytasks){
    //   let count = this.props.mytasks.length;
    //   if (count){
    //     countMSG =<p>{`This action will also result the deletion of all
    //         ${count} tasks associated with this lits`}</p>;
    //       }
    // }
  return(
      <form className='ModalRemove' onSubmit={this.handleSubmit}>
        <p>{ `Are you sure you want to delete ${this.props.name}`} list</p>
        <p>This action will also result the deletion of all
            the tasks associated with this list</p>
        <input type='submit' value='Remove List'/>
      </form>
    );
  }
}
export default removeList;
