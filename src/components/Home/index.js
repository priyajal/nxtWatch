import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import HomeVideos from '../HomeVideos'
import Side from '../Side'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    videosData: [],
    apiStatus: apiStatusConstants.initial,
    search: '',
  }

  componentDidMount() {
    this.getHomeDetails()
  }

  getHomeDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {search} = this.state
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${search}`
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      const fetchedData = data.videos.map(item => ({
        id: item.id,
        title: item.title,
        thumbnailUrl: item.thumbnail_url,
        channelName: item.channel.name,
        profileImageUrl: item.channel.profile_image_url,
        viewCount: item.view_count,
        publishedAt: item.published_at,
      }))

      return this.setState({
        videosData: fetchedData,
        apiStatus: apiStatusConstants.success,
      })
    }

    return this.setState({apiStatus: apiStatusConstants.failure})
  }

  renderNoResultsView = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
        alt="no videos"
      />
      <h1> No Search results found</h1>
      <p> Try different key words or remove search filter</p>
      <button type="button" onClick={this.getHomeDetails}>
        Retry
      </button>
    </div>
  )

  renderSuccessView = () => {
    const {videosData} = this.state
    return (
      <div>
        <div>
          <div>
            {videosData.length === 0 ? (
              this.renderNoResultsView()
            ) : (
              <ul>
                {videosData.map(item => (
                  <HomeVideos key={item.id} details={item} />
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    )
  }

  retryButton = () => {
    this.getHomeDetails()
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

  onSearch = event => {
    this.setState({search: event.target.value})
  }

  onSearchButton = () => {
    this.getHomeDetails()
  }

  render() {
    const {apiStatus} = this.state
    let renderComponent
    switch (apiStatus) {
      case apiStatusConstants.success:
        renderComponent = this.renderSuccessView()
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
          <Side />
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
                <input type="search" onChange={this.onSearch} />
                <button
                  type="button"
                  data-testid="searchButton"
                  onClick={this.onSearchButton}
                >
                  <img src="" alt="" />
                </button>
              </div>

              {renderComponent}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
