import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', isActive: false}

  onChangeName = event => {
    this.setState({username: event.target.value})
  }

  onChangePass = event => {
    this.setState({password: event.target.value})
  }

  onSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  onSubmitEvent = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    // const data = await response.json()
    if (response.ok === true) {
      this.setState({isActive: false})
      this.onSuccess()
    } else if (username === '' || password === '') {
      this.setState({isActive: true})
    } else {
      this.setState({isActive: true})
    }
  }

  render() {
    const {isActive} = this.state
    return (
      <div className="container">
        <div>
          <img
            className="website"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
          />
        </div>
        <div className="form">
          <img
            className="logo"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png "
            alt="website logo"
          />
          <form onSubmit={this.onSubmitEvent}>
            <label className="label" htmlFor="input">
              USERNAME
            </label>
            <input
              type="text"
              id="input"
              className="input"
              placeholder="Username"
              onChange={this.onChangeName}
            />
            <label className="label" htmlFor="input2">
              PASSWORD
            </label>
            <input
              type="password"
              id="input2"
              className="input"
              placeholder="Password"
              onChange={this.onChangePass}
            />
            <br />
            <button className="button" type="submit">
              Login
            </button>
            {isActive ? (
              <p className="warning">*Username and Password did'nt match</p>
            ) : null}
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm
