import {
  FailedView,
  FailureImage,
  FailureHeading,
  FailureNote,
  RetryButton,
} from './styledComponent'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

const FailureView = props => {
  const {onRetry} = props

  const onClickRetry = () => {
    onRetry()
  }

  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const headingColor = isDarkTheme ? '#f1f5f9' : '#1e293b'
        const noteColor = isDarkTheme ? '#e2e8f0' : '#475569'

        const failureImageUrl = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

        return (
          <FailedView>
            <FailureImage src={failureImageUrl} alt="failure view" />
            <FailureHeading color={headingColor}>
              Oops! Something Went Wrong
            </FailureHeading>
            <FailureNote color={noteColor}>
              We are having some trouble to complete your request. <br /> Please
              try again later.
            </FailureNote>
            <RetryButton onClick={onClickRetry} type="button">
              Retry
            </RetryButton>
          </FailedView>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}

export default FailureView
