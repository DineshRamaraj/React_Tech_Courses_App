import Loader from 'react-loader-spinner'
import {Component} from 'react'
import {
  CourseDetailsContainer,
  ImageContainer,
  Image,
  NameAndDescriptionContainer,
  Name,
  Description,
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
      <CourseDetailsContainer>
        <ImageContainer>
          <Image src={imageUrl} alt={name} />
        </ImageContainer>
        <NameAndDescriptionContainer>
          <Name>{name}</Name>
          <Description>{description}</Description>
        </NameAndDescriptionContainer>
      </CourseDetailsContainer>
    )
  }

  renderLoading = () => (
    <LoadingContainer data-testid="loader">
      <Loader type="ThreeDots" width={50} height={50} color="#4656a1" />
    </LoadingContainer>
  )

  onRetry = () => {
    this.getDataFromServer()
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

export default CourseDetails
