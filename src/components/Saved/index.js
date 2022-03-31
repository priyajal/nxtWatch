import {Component} from 'react'
import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'

import Header from '../Header'

class Saved extends Component {
  renderSavedVideos = () => {
    const savedVideos = Cookies.get('video_data')
    console.log(savedVideos)
    if (savedVideos === undefined) {
      return (
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
            alt="no saved videos"
          />
          <h1>No saved videos found</h1>
          <p> You can save your videos while watching them</p>
        </div>
      )
    }
    const videosData = JSON.parse(savedVideos)

    return <div></div>
  }

  render() {
    return (
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
            <h1>Saved Videos</h1>
            {this.renderSavedVideos()}
          </div>
        </div>
      </div>
    )
  }
}

export default Saved
