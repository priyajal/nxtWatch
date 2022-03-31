import './App.css'
import {Switch, Route, Redirect} from 'react-router-dom'
import LoginPage from './components/LoginPage'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import Home from './components/Home'
import ProtectedRoute from './components/ProtectedRoute'
import savedVideos from './components/savedVideos'
import VideosId from './components/VideosId'
import NotFound from './components/NotFound'

// Replace your code here
const App = () => (
  <div>
    <Switch>
      <Route exact path="/login" component={LoginPage} />
      <ProtectedRoute exact path="/" component={Home} />
      <ProtectedRoute exact path="/trending" component={Trending} />
      <ProtectedRoute exact path="/gaming" component={Gaming} />
      <ProtectedRoute exact path="/saved-videos" component={savedVideos} />
      <ProtectedRoute exact path="/videos/:id" component={VideosId} />
      <Route path="/bad-path" component={NotFound} />
      <Redirect to="/bad-path" />
    </Switch>
  </div>
)

export default App
