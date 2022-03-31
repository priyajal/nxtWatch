import {Component} from 'react'
import Cookies from 'js-cookie'

import Header from '../Header'
import Side from '../Side'

class savedVideos extends Component {
  getSavedVideos = () => {
    const response = Cookies.get('video_data')

    const data = JSON.parse(response)
    return (
      <ul>
        {data.map(item => (
          <li key={item.profileImageUrl}>
            <div>
              <div>
                <img src={item.profileImageUrl} alt="" />
              </div>
              <div>
                <p>{item.title}</p>
                <p>{item.channelName}</p>
                <p>{item.viewCount} views</p>
                <p>{item.publishedAt}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    )
  }

  renderNoSavedVideos = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
        alt="no saved videos"
      />
      <h1>No saved videos found</h1>
      <p> You can save your videos while watching them</p>
    </div>
  )

  render() {
    const response = Cookies.get('video_data')

    return (
      <div>
        <Header />
        <div>
          <Side />
          <div>
            <h1>Saved Videos</h1>
            {response === undefined
              ? this.renderNoSavedVideos()
              : this.getSavedVideos()}
          </div>
        </div>
      </div>
    )
  }
}

export default savedVideos
