import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

import Header from '../Header'
import NavigationBar from '../NavigationBar'
import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'
import PlayVideoView from '../PlayVideoView'

import {VideoDetailViewContainer, LoaderContainer} from './styledComponent'

const apiStatusConstant = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoDetailView extends Component {
  state = {
    apiStatus: apiStatusConstant.initial,
    videoDetails: [],
    isLiked: false,
    isDisLiked: false,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  formattedData = data => ({
    id: data.video_details.id,
    title: data.video_details.title,
    videoUrl: data.video_details.video_url,
    thumbnailUrl: data.video_details.thumbnail_url,
    viewCount: data.video_details.view_count,
    publishedAt: data.video_details.published_at,
    description: data.video_details.description,
    name: data.videoDetails.channel.name,
    profileImageUrl: data.video_details.channel.profile_image_url,
    subscriberCount: data.videoDetails.channel.subscriber_count,
  })

  getVideoDetails = async () => {
    this.setState({apiStatus: apiStatusConstant.inProgress})

    const {match} = this.props
    const {params} = match
    const {id} = params

    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      const updatedData = this.formattedData(data)
      this.setState({
        videoDetails: updatedData,
        apiStatus: apiStatusConstant.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstant.failure})
    }
  }

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </LoaderContainer>
  )

  clickLiked = () => {
    this.setState(prevState => ({
      isLiked: !prevState.isLiked,
      isDisLiked: false,
    }))
  }

  clickDisLiked = () => {
    this.setState(prevState => ({
      isDisLiked: !prevState.isDisLiked,
      isLiked: false,
    }))
  }

  renderPlayVideoView = () => {
    const {videoDetails, isLiked, isDisLiked} = this.state

    return (
      <PlayVideoView
        videoDetails={videoDetails}
        isLiked={isLiked}
        isDisLiked={isDisLiked}
        clickLiked={this.clickLiked}
        clickDisLiked={this.clickDisLiked}
      />
    )
  }

  renderVideoDetailView = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstant.success:
        return this.renderPlayVideoView()
      case apiStatusConstant.inProgress:
        return this.renderLoadingView()
      case apiStatusConstant.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeAndVideoContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'

          return (
            <>
              <Header />
              <NavigationBar />
              <VideoDetailViewContainer
                data-testid="videoItemDetails"
                bgColor={bgColor}
              >
                {this.renderVideoDetailView()}
              </VideoDetailViewContainer>
            </>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}

export default VideoDetailView
