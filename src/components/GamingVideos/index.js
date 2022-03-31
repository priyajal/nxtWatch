import {Link} from 'react-router-dom'

const GamingVideos = props => {
  const {details} = props
  const {id, title, thumbnailUrl, viewCount} = details

  return (
    <Link to={`/videos/${id}`}>
      <li>
        <img src={thumbnailUrl} alt="video thumbnail" />
        <div>
          <div>
            <p>{title}</p>
            <p>{viewCount} Watching Worldwide</p>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default GamingVideos
