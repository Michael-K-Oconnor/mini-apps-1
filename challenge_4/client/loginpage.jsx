import React from 'react';
import InputForm from './inputform';

const LoginPage = ({ player1isLoggedIn, player1name, player1failure,
  player2isLoggedIn, player2name, player2failure, handleSubmit }) => (
    <div>
      PLAYER 1
    {
        (player1isLoggedIn) ? (
          <div>{player1name} is logged in as Player 1</div>) : (
            <InputForm id={1} failure={player1failure} handleSubmit={handleSubmit} />
          )
      }
      <br />
      <br />
      PLAYER 2
      {
        player2isLoggedIn ? (
          <div>{player2name} is logged in as Player 2</div>) : (
            <InputForm id={2} failure={player2failure} handleSubmit={handleSubmit} />
          )
      }
    </div>
  );


export default LoginPage;
