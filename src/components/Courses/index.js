import Loader from 'react-loader-spinner'
import {Component} from 'react'
import {
  CourseContainer,
  CourseHeading,
  CourseListContainer,
  LinkItem,
  CourseItem,
  CourseItemImage,
  CourseItemHeading,
  LoadingContainer,
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailureDescription,
  FailureRetryButton,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Courses extends Component {
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
      <CourseContainer>
        <CourseHeading>Courses</CourseHeading>
        <CourseListContainer>
          {courseList.map(eachItem => (
            <LinkItem to={`/courses/${eachItem.id}`}>
              <CourseItem>
                <CourseItemImage src={eachItem.logoUrl} alt="name" />
                <CourseItemHeading>{eachItem.name}</CourseItemHeading>
              </CourseItem>
            </LinkItem>
          ))}
        </CourseListContainer>
      </CourseContainer>
    )
  }

  renderLoading = () => (
    <LoadingContainer data-testid="loader">
      <Loader type="ThreeDots" width={50} height={50} color="#4656a1" />
    </LoadingContainer>
  )

  onRetry = () => {
    this.getCourseList()
  }

  renderFailure = () => (
    <FailureContainer>
      <FailureImage
        src="https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png"
        alt="failure view"
      />
      <FailureHeading>Oops! Something Went Wrong</FailureHeading>
      <FailureDescription>
        We cannot seem to find the page you are looking for.
      </FailureDescription>
      <FailureRetryButton type="button" onClick={this.onRetry}>
        Retry
      </FailureRetryButton>
    </FailureContainer>
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

export default Courses
