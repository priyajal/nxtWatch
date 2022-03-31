import {Link} from 'react-router-dom'

const HomeVideos = props => {
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
    <li>
      <Link to={`/videos/${id}`}>
        <img src={thumbnailUrl} alt="video thumbnail" />
      </Link>
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
  )
}

export default HomeVideos
