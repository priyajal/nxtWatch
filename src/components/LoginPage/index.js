import {Redirect} from 'react-router-dom'
import {Component} from 'react'
import Cookies from 'js-cookie'

class LoginPage extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
    checkedStatus: false,
  }

  onSearchUsername = event => {
    this.setState({username: event.target.value})
  }

  onSearchPassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  changeChecked = () => {
    this.setState(prev => ({checkedStatus: !prev.checkedStatus}))
  }

  render() {
    const {
      username,
      password,
      showSubmitError,
      errorMsg,
      checkedStatus,
    } = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div>
        <form onSubmit={this.onSubmitForm}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website logo"
          />
          <label htmlFor="username">USERNAME</label>
          <input
            type="text"
            id="username"
            placeholder="Username"
            value={username}
            onChange={this.onSearchUsername}
          />
          <label htmlFor="password">PASSWORD</label>
          {checkedStatus ? (
            <input
              type="text"
              id="password"
              placeholder="Password"
              value={password}
              onChange={this.onSearchPassword}
            />
          ) : (
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={this.onSearchPassword}
            />
          )}

          <input
            type="checkbox"
            id="checkBox"
            onClick={this.changeChecked}
            checked={checkedStatus}
          />

          <label htmlFor="checkBox"> Show Password</label>
          <button type="submit" className="buttonColor">
            Login
          </button>
        </form>
        {showSubmitError && <p>{errorMsg}</p>}
      </div>
    )
  }
}

export default LoginPage
