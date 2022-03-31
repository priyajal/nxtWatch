import {Link} from 'react-router-dom'

import Header from '../Header'

const NotFound = () => (
  <div>
    <Header />
    <div>
      <div>
        <ul>
          <Link to="/">
            <li>
              <img src="" alt="" />
              <p>Home</p>
            </li>
          </Link>
          <Link to="/trending">
            <li>
              <img src="" alt="" />
              <p>Trending</p>
            </li>
          </Link>
          <Link to="/gaming">
            <li>
              <img src="" alt="" />
              <p>Gaming</p>
            </li>
          </Link>
          <Link to="/saved-videos">
            <li>
              <img src="" alt="" />
              <p>Saved videos</p>
            </li>
          </Link>
        </ul>
        <div>
          <p> CONTACT US</p>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
              alt="facebook logo"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
              alt="twitter logo"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
              alt="linked in logo"
            />
          </div>
          <p> Enjoy! Now to see your channels and recommendations!</p>
        </div>
      </div>
      <div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="nxt watch logo"
          />
          <p> Buy Nxt Watch Premium prepaid plans with UPI</p>
          <button type="button">GET IT NOW</button>
          <img src="" alt="" />
        </div>
        <div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"
              alt="not found"
            />
            <h1>Page Not Found</h1>
            <p>we are sorry, the page you requested could not be found.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default NotFound
