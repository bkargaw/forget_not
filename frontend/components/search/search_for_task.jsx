import React from 'react';
import { hashHistory } from 'react-router';

class SearchForTask extends React.Component {
  constructor( props ) {
    super( props );
    this.state = {prefix: ''};

    this._handleKeyPress = this._handleKeyPress.bind(this);

  }

  _handleKeyPress(e){
    debugger;
    e.preventDefault();
    if (e.key === 'Enter' && !this.state.prefix !== '') {
      hashHistory.push(`/tasks/search/${this.state.prefix}`);
    }else{
      this.setState({prefix: `${e.key}${this.state.prefix}`});
    }
  }


  render(){
    return <input type="text"
                  value={this.state.prefix}
                  onKeyPress={this._handleKeyPress} />;
  }
}

export default SearchForTask;
