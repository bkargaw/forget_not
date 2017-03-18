import  React  from 'react';
import { Link } from 'react-router';

class mainSideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state= {rangeState: '' };
    this.toggelRangeShow = this.toggelRangeShow.bind(this);
  }

  toggelRangeShow(e){
    e.preventDefault();
    if(this.state.rangeState == ''){
      this.setState({rangeState: 'hidden'});
    }else{
      this.setState({rangeState: ''});
    }
  }


  render (){
    let username;
    debugger;
    if (this.props.currentUser){
       username =this.props.currentUser.username;
    }
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
      </div>
    );
  }

}

export default mainSideBar;
