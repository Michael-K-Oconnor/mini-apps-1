const LoginPage = ({ handleSubmit, handleInputChange, emailText, passwordText }) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        EMAIL:
    <input type="text" name="email" value={emailText} onChange={handleInputChange} />
      </label>
      <label>
        PASSWORD:
    <input type="text" name="password" value={passwordText} onChange={handleInputChange} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  )
}