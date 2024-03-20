import Loader from 'react-loader-spinner'
import {Link} from 'react-router-dom'
import {Component} from 'react'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    courseList: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getCourseList()
  }

  updatedData = data => ({
    id: data.id,
    name: data.name,
    logoUrl: data.logo_url,
  })

  getCourseList = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const apiUrl = 'https://apis.ccbp.in/te/courses'
    const options = {
      method: 'GET',
    }

    const response = await fetch(apiUrl, options)
    const data = await response.json()
    const updatedData = data.courses.map(eachItem => this.updatedData(eachItem))
    if (response.ok) {
      this.setState({
        courseList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderSuccess = () => {
    const {courseList} = this.state
    return (
      <div className="course-container">
        <h1 className="course-heading">Courses</h1>
        <ul className="course-list-container">
          {courseList.map(eachItem => (
            <li className="course-item" key={eachItem.id}>
              <Link className="course-link" to={`/courses/${eachItem.id}`}>
                <img
                  className="course-item-image"
                  src={eachItem.logoUrl}
                  alt={eachItem.name}
                />
                <p className="course-item-heading">{eachItem.name}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  renderLoading = () => (
    <div className="loading-container" data-testid="loader">
      <Loader type="ThreeDots" width={50} height={50} color="#4656a1" />
    </div>
  )

  onRetry = () => {
    this.getCourseList()
  }

  renderFailure = () => (
    <div className="failure-container">
      <img
        className="failure-image"
        src="https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png"
        alt="failure view"
      />
      <h1 className="failure-heading">Oops! Something Went Wrong</h1>
      <p className="failure-description">
        We cannot seem to find the page you are looking for.
      </p>
      <button className="retry-button" type="button" onClick={this.onRetry}>
        Retry
      </button>
    </div>
  )

  render() {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoading()
      case apiStatusConstants.success:
        return this.renderSuccess()
      case apiStatusConstants.failure:
        return this.renderFailure()
      default:
        return null
    }
  }
}

export default Home
