import React from 'react';
import { hashHistory, Link } from 'react-router';
import {modal} from 'react-redux-modal';

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

  removeThisModal() {
    this.props.removeModal();
  }

  // componentWillReceiveProps(newProps){
  //   if (this.props.errors.length !== 0 ) this.props.removeErrors();
  // }
  componentDidMount(newProps){
    this.props.removeErrors();
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.processForm(this.state)
    .then(()=> hashHistory.push('/'))
    .then(()=> this.removeThisModal());
  }

  update(field){
    return e => {
      e.preventDefault();
      this.setState({[field]: e.target.value});
    };
  }

  renderErrors(){
    return(
      <ul className='errors'>
  		{this.props.errors.map((error, i) => (
  			<li key={`error-${i}`}>
  				{error}
  			</li>
  		))}
  	</ul>
  );
  }
  render(){
    const header = this.props.formType === 'Login' ? 'Log In' : 'Sign Up';
    const or = this.props.formType === 'Login' ? 'or' : '';

  return (
    <div>
      <form onSubmit={ this.handleSubmit }>
        { this.renderErrors() }
        <label className="input-wrapper">
          <span>Username</span>
          <input
              type='text'
              placeholder= ' username'
              onChange={this.update('username')}
              value={ this.state.username } />
        </label>

        <label className="input-wrapper">
          <span> {or} Email</span>
          <input
              type='email'
              placeholder= ' email'
              onChange={ this.update('email') }
              value={ this.state.email } />
        </label>

        <label className="input-wrapper">
          <span>Password</span>
          <input
              type='password'
              placeholder= ' password'
              onChange={ this.update('password') }
              value={ this.state.password } />
        </label>

        <input type='submit' value={header}/>


      </form>
   </div>
 );
  }
}

export default SessionForm;
