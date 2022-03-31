import {Link} from 'react-router-dom'

const Side = () => (
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
  </div>
)

export default Side
