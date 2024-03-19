import {Switch, Route, Redirect} from 'react-router-dom'
import Header from './components/Header'
import Courses from './components/Courses'
import CourseDetails from './components/CourseDetails'
import NotFound from './components/NotFound'
import './App.css'

const App = () => (
  <div className="app-container">
    <Header />
    <Switch>
      <Route exact path="/" component={Courses} />
      <Route exact path="/courses/:id" component={CourseDetails} />
      <Route path="/not-found" component={NotFound} />
      <Redirect to="/not-found" />
    </Switch>
  </div>
)

export default App
