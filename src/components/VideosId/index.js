import {Component} from 'react'
import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import Header from '../Header'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideosId extends Component {
  state = {
    videosData: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})

    const {match} = this.props
    const {params} = match
    const {id} = params
    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    console.log(response)
    if (response.ok === true) {
      const data = await response.json()
      const fetchedData = {
        id: data.video_details.id,
        title: data.video_details.title,
        videoUrl: data.video_details.video_url,
        thumbnailUrl: data.video_details.thumbnail_url,
        channelName: data.video_details.channel.name,
        profileImageUrl: data.video_details.channel.profile_image_url,
        subscriberCount: data.video_details.channel.subscriber_count,
        viewCount: data.view_count,
        publishedAt: data.published_at,
        description: data.description,
      }
      return this.setState({
        videosData: fetchedData,
        apiStatus: apiStatusConstants.success,
      })
    }

    return this.setState({apiStatus: apiStatusConstants.failure})
  }

  renderVideo = () => {
    const {videosData} = this.state
    const {
      thumbnailUrl,
      title,
      viewCount,
      publishedAt,
      subscriberCount,
      description,
      channelName,
      profileImageUrl,
    } = videosData

    const saveVideo = () => {
      const CookiesVideoData = Cookies.get('video_data')
      if (CookiesVideoData === undefined) {
        const video = [videosData]
        const jsonVideo = JSON.stringify(video)
        return Cookies.set('video_data', jsonVideo)
      }
      const jsonCookies = JSON.parse(CookiesVideoData)
      const indexValue = jsonCookies.findIndex(
        item => item.thumbnailUrl === thumbnailUrl,
      )
      console.log(indexValue)
      if (indexValue !== -1) {
        return null
      }
      jsonCookies.push(videosData)

      const newVideoData = JSON.stringify(jsonCookies)
      return Cookies.set('video_data', newVideoData)
    }
    return (
      <div>
        <div className="videoUrl">
          <img src={thumbnailUrl} alt="" />
          <p>{title}</p>
          <div>
            <img src="" alt="" />
            <p>WatchLater</p>
            <img src="" alt="" />
            <p>Share</p>
          </div>
        </div>
        <div>
          <p>{title}</p>
          <p>{viewCount} views</p>
          <p>{publishedAt}</p>
          <img src="" alt="" />
          <p>Like</p>
          <img src="" alt="" />
          <p>Dislike</p>
          <button onClick={saveVideo} type="button">
            <img src="" alt="" />
            <p>Saved</p>
          </button>
        </div>
        <div>
          <img src={profileImageUrl} alt="" />
          <p>{channelName}</p>
          <p>{subscriberCount} subscribers</p>
          <p>{description}</p>
        </div>
      </div>
    )
  }

  retryButton = () => {
    this.getVideoDetails()
  }

  renderFailureView = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failure view"
      />
      <h1> Oops! Something Went Wrong</h1>
      <p>
        We are having some trouble to complete your request.Please try again.
      </p>
      <button type="button" onClick={this.retryButton}>
        Retry
      </button>
    </div>
  )

  renderLoadingView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  render() {
    const {apiStatus} = this.state
    let renderComponent
    switch (apiStatus) {
      case apiStatusConstants.success:
        renderComponent = this.renderVideo()
        break
      case apiStatusConstants.failure:
        renderComponent = this.renderFailureView()
        break
      case apiStatusConstants.inProgress:
        renderComponent = this.renderLoadingView()
        break

      default:
        renderComponent = null
    }

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
            <div>{renderComponent}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default VideosId
