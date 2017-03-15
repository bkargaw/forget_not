import React from 'react';
import { hashHistory, Link } from 'react-router';

class SessionForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = { username: '',
                   password: '',
                   email: ''
                 };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.processForm(this.state).then(()=> hashHistory.push('/') );
  }

  update(field){
    return e => {
      e.preventDefault();
      this.setState({[field]: e.target.value});
    };
  }

  renderErrors(){
    return(
      <ul>
  		{this.props.errors.map((error, i) => (
  			<li key={`error-${i}`}>
  				{error}
  			</li>
  		))}
  	</ul>
  );
  }
  render(){
    const header = this.props.formType === '/login' ? 'Log In' : 'Sign Up';
    const linkpath = this.props.formType === '/login' ? 'signup' : 'login';
    const linkName = this.props.formType === '/login' ? 'Sign Up' : 'Log In';


  return (
    <div>
      <h3>{ header }</h3>
      <form onSubmit={ this.handleSubmit }>
        { this.renderErrors() }
        <label>Username
          <input
              type='text'
              onChange={this.update('username')}
              value={ this.state.username } />
        </label>

        <p><strong> or </strong></p>

        <label>Email
          <input
              type='text'
              onChange={ this.update('email') }
              value={ this.state.email } />
        </label>

        <br/>

        <label>Password
          <input
              type='password'
              onChange={ this.update('password') }
              value={ this.state.password } />
        </label>

        <input type='submit' value={header}/>
        <br />
        <Link to={ linkpath }>{ linkName }</Link>
      </form>
   </div>
 );
  }
}

export default SessionForm;
