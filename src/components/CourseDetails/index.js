import Loader from 'react-loader-spinner'
import {Component} from 'react'
import './index.css'
import Failure from '../Failure'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class CourseDetails extends Component {
  state = {
    courseDetails: {},
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getDataFromServer()
  }

  getDataFromServer = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const apiUrl = `https://apis.ccbp.in/te/courses/${id}`
    const options = {
      method: 'GET',
    }

    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok) {
      this.setState({
        courseDetails: {
          id: data.course_details.id,
          name: data.course_details.name,
          imageUrl: data.course_details.image_url,
          description: data.course_details.description,
        },
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderSuccess = () => {
    const {courseDetails} = this.state
    const {imageUrl, name, description} = courseDetails
    return (
      <div className="course-details-container">
        <div className="image-container">
          <img className="image" src={imageUrl} alt={name} />
        </div>
        <div className="name-and-description-container">
          <h1 className="name">{name}</h1>
          <p className="description">{description}</p>
        </div>
      </div>
    )
  }

  renderLoading = () => (
    <div className="loading-container" data-testid="loader">
      <Loader type="ThreeDots" width={50} height={50} color="#4656a1" />
    </div>
  )

  onRetry = () => {
    this.getDataFromServer()
  }

  renderFailure = () => <Failure onRetry={this.onRetry} />

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

export default CourseDetails
