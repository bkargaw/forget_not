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

  componentWillReceiveProps(newProps){
    if (this.props.formType !== newProps.formType) this.props.removeErrors();
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



  return (
    <div>
      <h3>{ header }</h3>
      <form onSubmit={ this.handleSubmit }>
        { this.renderErrors() }
        <label className="input-wrapper"><span>Username</span>
          <input
              type='text'
              onChange={this.update('username')}
              value={ this.state.username } />
        </label>

        <p><strong> or </strong></p>

        <label className="input-wrapper"><span>Email</span>
          <input
              type='email'
              onChange={ this.update('email') }
              value={ this.state.email } />
        </label>

        <br/>

        <label className="input-wrapper"><span>Password</span>
          <input
              type='password'
              onChange={ this.update('password') }
              value={ this.state.password } />
        </label>

        <input type='submit' value={header}/>
        <br />

      </form>
   </div>
 );
  }
}

export default SessionForm;
