import React from 'react';
import LoginPage from './loginpage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player1: {
        isLoggedIn: false,
        name: undefined,
      },
      player2: {
        isLoggedIn: false,
        name: undefined,
      },
      gameState: 'notStarted',
    };
  }

  render() {
    const { player1, player2 } = this.state;
    if (!(player1.isLoggedIn && player2.isLoggedIn)) {
      return <LoginPage player1={player1} player2={player2} />;
    }
    return <div>Hellow Workdl</div>;
  }
}

export default App;
