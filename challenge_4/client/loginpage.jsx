import React from 'react';
import InputForm from './inputform';

const LoginPage = ({ player1, player2 }) => (
  <div>
    PLAYER 1
    {
      player1.isLoggedIn ? (
        <div>Player 1 is logged in</div>) : (
          <InputForm player={player1} />
      )
    }
    <br />
    <br />
    PLAYER 2
    {
      player2.isLoggedIn ? (
        <div>Player 2 is logged in</div>) : (
          <InputForm player={player2} />
      )
    }
  </div>
);


export default LoginPage;
