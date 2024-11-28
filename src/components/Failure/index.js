import './index.css'

const Failure = props => {
  const {onRetry} = props
  return (
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
      <button className="retry-button" type="button" onClick={onRetry}>
        Retry
      </button>
    </div>
  )
}

export default Failure
