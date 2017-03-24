import React from 'react';
import { Link, hashHistory } from 'react-router';
import TaskFormContainer from './task_form_container';

class mainBody extends React.Component{
  constructor(props) {
    super(props);
    this.state = { path: this.props.indexType,
                   DeletList: [],
                   ShowButton: 'hidden'
                 };
    this.handelDelete = this.handelDelete.bind(this);
  }

  componentDidMount(){
    debugger;
    if (this.props.params.listId){
     this.props.updateTasks(this.props.params.listId);
    }else if(this.props.getAllTasks){
      this.props.getAllTasks();
    }else {
      this.props.updateTasks();
    }
  }

  componentWillReceiveProps(nextProps){
    let path = nextProps.location.pathname.split('/');
    if(nextProps.indexType !== this.props.indexType && path[1] ==='tasks'){
      if (nextProps.params.listId){
        nextProps.updateTasks(nextProps.params.listId);
      } else if(parseInt(nextProps.indexType) && parseInt(path[1])) {
        nextProps.updateTasks(parseInt(nextProps.indexType));
      }else {
        nextProps.updateTasks();
      }

      let indexType;
      if(path[0].length === 0 ){
        indexType = path[path.length -1];
      }else {
        indexType = path[path.length -2];
      }
      this.setState({path: indexType});
    }
  }

  handelDelete(){
      let DeletList = this.state.DeletList;
      DeletList.forEach(id => this.props.deleteTask(id));
      hashHistory.push(this.props.route.path);
      this.setState({path: this.props.indexType,
                     DeletList: [],
                     ShowButton: 'hidden'});
  }

  updateDeleteList(id){
    let that = this;
    return( e =>{
      let DeletList = that.state.DeletList;
      let index = DeletList.indexOf(id);
      if (index > -1) {
        DeletList.splice(index, 1);
      }else{
        DeletList.push(id);
      }
      that.setState({ DeletList, ShowButton: '' });
    }
  );
  }


  render(){
    const allTasks =
            <ul>
              {this.props.tasks.map((task, idx) =>(
                <div key={idx+'check'} className='TaskList'>
                  <input
                          type='checkbox'
                          onClick={this.updateDeleteList(task.id)}/>

                  <Link key={idx} to={`tasks/${this.state.path}/${task.id}`}>
                    <li >
                      {task.title}
                    </li>
                  </Link>
                </div>
              )
              )}
            </ul>;
    return(
    <div className='MAINBODYCONTAINER'>
      <section  className= 'mainbodySection'>
        <div className='DeleteAction'>
          <i id='delete'
            onClick= { this.handelDelete }
             className="fa fa-trash fa-2x" aria-hidden="true">
          </i>
          <p>Delete Tasks</p>
        </div>
        <TaskFormContainer />
        <br/>
        { allTasks }
      </section>

      <section  className= 'mainShowSection'>
        {this.props.children}
      </section>
    </div>
    );
  }
}

export default mainBody;
