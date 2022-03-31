import {withRouter, Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import PopUp from '../PopUp'

const Header = props => {
  const {history} = props

  const logoutButton = () => {
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <nav>
      <ul>
        <Link to="/">
          <li>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              alt="website logo"
            />
          </li>
        </Link>

        <li>
          <img src="" alt="" />
        </li>
        <li>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
            alt="profile"
          />
        </li>
        <li>
          <PopUp logoutButton={logoutButton} />
        </li>
      </ul>
    </nav>
  )
}

export default withRouter(Header)
