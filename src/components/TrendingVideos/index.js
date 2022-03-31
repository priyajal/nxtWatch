import {Link} from 'react-router-dom'

const TrendingVideos = props => {
  const {details} = props
  const {
    id,
    title,
    thumbnailUrl,
    profileImageUrl,
    channelName,
    viewCount,
    publishedAt,
  } = details

  return (
    <Link to={`/videos/${id}`}>
      <li>
        <img src={thumbnailUrl} alt="video thumbnail" />
        <div>
          <img src={profileImageUrl} alt="channel logo" />
          <div>
            <p>{title}</p>
            <p>{channelName}</p>
            <p>{viewCount} views</p>
            <p>{publishedAt}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default TrendingVideos
