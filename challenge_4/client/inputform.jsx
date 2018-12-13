import React from 'react';

const InputForm = ({ player }) => (
  <div>
    <form action="/action_page.php">
      Username
      <input type="text" name="username" />
      <br />
      Password
      <input type="text" name="password" />
      <br />
      <input type="submit" value="Log In" />
      <input type="submit" value="Sign Up" />
      <br />
      <input type="submit" value="Log In as Guest" />
    </form>
  </div>
);

export default InputForm;
