import React, { Component } from 'react';

class InputForm extends Component {
  constructor(props) {
    super(props);
    this.handleTyping = this.handleTyping.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.state = {
      username: '',
      password: '',
    };
  }

  handleTyping(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleFormSubmit(e) {
    e.preventDefault();
    const { handleSubmit } = this.props;
    const { username, password } = this.state;
    const [id, submitType] = [e.target.getAttribute('data-playerid'), e.target.name];
    handleSubmit(id, username, password, submitType);
    this.setState({
      username: '',
      password: '',
    });
  }

  render() {
    const { username, password } = this.state;
    const { id, failure } = this.props;
    return (
      <div>
        <form>
          Username
          <input type="text" name="username" value={username} onChange={this.handleTyping} />
          <br />
          Password
          <input type="password" name="password" value={password} onChange={this.handleTyping} />
          <br />
          <input type="submit" data-playerid={id} value="Log In" name="LogIn" onClick={this.handleFormSubmit} />
          <input type="submit" data-playerid={id} value="Sign Up" name="SignUp" onClick={this.handleFormSubmit} />
          <br />
          <input type="submit" data-playerid={id} value="Log In as Guest" name="GuestLogin" onClick={this.handleFormSubmit} />
        </form>
        {failure && <div>{failure}</div>}
      </div>
    );
  }
}

export default InputForm;
