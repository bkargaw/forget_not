import React from 'react';
import { hashHistory } from 'react-router';
import SearchInput from 'react-search-input';

class SearchForTask extends React.Component {
  constructor( props ) {
    super( props );
    this.state = {prefix: ''};
    this.searchUpdated = this.searchUpdated.bind(this);
  }

  searchUpdated(term){
    if (term !== ''){
      hashHistory.push(`/tasks/search/${term}`);
    }
  }


  render(){
    if(this.props.currentUser){
      return  <SearchInput className="search-input"
                           onChange={this.searchUpdated}/>;
    }else {
      return <div></div>;
    }
  }
}

export default SearchForTask;
