class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleProfilePageClick = this.handleProfilePageClick.bind(this);
    this.handleLoginPageSubmit = this.handleLoginPageSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleHomePageClick = this.handleHomePageClick.bind(this);
    this.state = {
      currentPage: 'HomePage',
      isLoggedIn: false,
      email: '',
      password: ''
    }
  }

  handleProfilePageClick(e) {
    e.preventDefault();
    this.setState({
      currentPage: 1
    })
  }

  handleHomePageClick(e) {
    e.preventDefault();
    this.setState({
      currentPage: e.target.id
    })
  }

  handleLoginPageSubmit(e) {
    e.preventDefault();
    let credentials = {
      email: this.state.email,
      password: this.state.password,
      type: this.state.currentPage
    }
    fetch('http://localhost:3000/login', {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(credentials), // body data type must match "Content-Type" header
    })
      .then((response) => {
        console.log('WROTE USER TO SERVER')
      })
      .catch((err) => {
        console.log('ERROR WRITING LOGIN TO SERVER')
      })
  }

  handleInputChange(e) {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    })
  }


  render() {
    if (this.state.isLoggedIn === false) {
      if (this.state.currentPage === 'SignUpPage' || this.state.currentPage === 'LoginPage') {
        return (<LoginPage handleSubmit={this.handleLoginPageSubmit} />)
      } else {
        return (<HomePage handleClick={this.handleHomePageClick} />)
      }
    } else {


      if (this.state.currentPage === 'HomePage') {
        return (<ProfilePage handleClick={this.handleProfilePageClick} />)
      } else if (this.state.currentPage === 1) {
        return (<Login
          handleLoginSubmit={this.handleLoginSubmit}
          handleInputChange={this.handleInputChange}
          emailText={this.state.email} passwordText={this.state.password} />)
      }
    }
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root'),
);