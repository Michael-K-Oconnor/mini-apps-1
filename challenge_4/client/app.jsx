import React from 'react';
import LoginPage from './loginpage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.state = {
      player1isLoggedIn: false,
      player1name: null,
      player1failure: null,
      player2isLoggedIn: false,
      player2name: null,
      player2failure: null,
    };
  }

  handleLoginSubmit(id, username, password, submitType) {
    const data = { username, password };
    const loggedInSelector = `player${id}isLoggedIn`;
    const nameSelector = `player${id}name`;
    const failedSignupSelector = `player${id}failure`;
    if (submitType === 'GuestLogin') {
      this.setState({
        [loggedInSelector]: true,
        [nameSelector]: `Guest${id}`,
      });
    } else if (data.username === this.state.player1name || data.username === this.state.player2name) {
      this.setState({
        [failedSignupSelector]: 'OTHER PLAYER IS SIGNED IN AS THAT USER'
      })
    } else if (data.username.length < 4) {
      this.setState({
        [failedSignupSelector]: 'USERNAME MUST BE AT LEAST 4 CHARACTERS LONG'
      })
    } else if (data.password.length < 4) {
      this.setState({
        [failedSignupSelector]: 'PASSWORD MUST BE AT LEAST 4 CHARACTERS LONG'
      })
    } else if (submitType === 'LogIn') {
      this.loginUser(data, failedSignupSelector, loggedInSelector, nameSelector)
    } else if (submitType === 'SignUp') {
      this.submitNewUser(data, failedSignupSelector, loggedInSelector, nameSelector)
    } else {
      console.log('Something went wrong on sign in page');
    }
  }


  render() {
    const { player1isLoggedIn, player1name, player1failure, player2isLoggedIn, player2name, player2failure } = this.state;
    if (!(player1isLoggedIn && player2isLoggedIn)) {
      return (
        <LoginPage
          player1isLoggedIn={player1isLoggedIn}
          player1name={player1name}
          player1failure={player1failure}
          player2isLoggedIn={player2isLoggedIn}
          player2name={player2name}
          player2failure={player2failure}
          handleSubmit={this.handleLoginSubmit}
        />
      );
    }
    return <div>Connect game supposed to go here</div>;
  }

  submitNewUser(data, failedSignupSelector, loggedInSelector, nameSelector) {
    fetch('http://localhost:3000/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    })
      .then((res) => {
        if (res.status === 401) {
          this.setState({
            [failedSignupSelector]: 'USERNAME NOT AVAILABLE',
          });
        } else if (res.status === 201) {
          this.setState({
            [loggedInSelector]: true,
            [nameSelector]: data.username,
          });
        }
      });
  }

  loginUser(data, failedSignupSelector, loggedInSelector, nameSelector) {
    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    })
      .then((res) => {
        if (res.status === 401) {
          this.setState({
            [failedSignupSelector]: 'INCORRECT USERNAME OR PASSWORD'
          })
        } else if (res.status === 202) {
          this.setState({
            [loggedInSelector]: true,
            [nameSelector]: data.username,
          });
        }
      })
  }

}

export default App;
