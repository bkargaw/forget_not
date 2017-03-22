import  React  from 'react';
import { Link } from 'react-router';
import {modal} from 'react-redux-modal';
import AddListContainer from '../list/add_list_container';

class mainSideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state= {rangeState: '',
                listState: '' };
    this.toggelRangeShow = this.toggelRangeShow.bind(this);
    this.toggelIndexShow = this.toggelIndexShow.bind(this);
  }

  componentDidMount(){
      this.props.getAllLists();
  }

  addModal(title) {
    return () =>(
    modal.add(AddListContainer, {
      title: title,
      size: 'small', // large, medium or small,
      closeOnOutsideClick: false, // (optional) Switch to true
      // if you want to close the modal by clicking outside of it,
      hideTitleBar: false, // (optional) Switch to
      // true if do not want the default title bar and close button,
      hideCloseButton: false, // (optional) if you don't
      // wanna show the top right close button
      //.. all what you put in here you will get access in
      // the modal props ;)
    })
  );
  }

  toggelRangeShow(e){
    e.preventDefault();
    if(this.state.rangeState ===''){
      this.setState({rangeState: 'hidden'});
    }else{
      this.setState({rangeState: ''});
    }
  }
  toggelIndexShow(e){
    e.preventDefault();
    if(this.state.listState === ''){
      this.setState({listState: 'hidden'});
    }else{
      this.setState({listState: ''});
    }
  }


  render (){
    let username;
    if (this.props.currentUser){
       username =this.props.currentUser.username;
    }

    let lists =
          <ul>
            {this.props.lists.slice(1).map((list) =>(
              <li key={list.id}>
                <Link to={`tasks/${list.id}`}>
                  {list.name.replace(/\b\w/g, l => l.toUpperCase())}
                </Link>
                <i className="fa fa-arrow-circle-o-down" aria-hidden="true"></i>
              </li>
            )
            )}
          </ul>;
    return(
      <div className='mainSideBarRange'>

        <h4>User Name: {username}</h4>

        <div className='mainSideBarRangeToggle'>
            <i
              onClick={this.toggelRangeShow}
              className="fa fa-angle-down"
              aria-hidden="true">
            </i>
            <div className='indexRap'>
              <Link to='/tasks/1'>index</Link>
            </div>
        </div>
        <div  className={this.state.rangeState}>
        <div className='sidebarRanges'>
          <Link to='/tasks/all'>All Tasks</Link>
          <Link to='/tasks/today'>Today</Link>
          <Link to='/tasks/tomorrow'>Tomorrow</Link>
          <Link to='/tasks/week'>Week</Link>
          </div>
        </div>

        <div className='mainSideBarListToggle'>
          <i
            onClick={this.toggelIndexShow}
            className="fa fa-angle-down"
            aria-hidden="true">
            <p>Lists</p>
          </i>

          <div  className={this.state.listState}>
            <div onClick={this.addModal('Add A List')}>
              <i className="fa fa-plus-circle" aria-hidden="true"></i>
            </div>

            <div className='listRap'>
              { lists }
            </div>
          </div>
        </div>

      </div>
    );
  }

}

export default mainSideBar;
