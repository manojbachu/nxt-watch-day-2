import {Component} from 'react'
import Cookies from 'js-cookie'
import Header from '../Header'
import {VideoItemsDetailsContainer} from './styledComponents'

const apiConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  progress: 'PROGRESS',
}

class VideoItemDetails extends Component {
  state = {status: apiConstants.initial, videoItemDetails: {}, errMsg: ''}

  componentDidMount() {
    this.getVideoDetails()
  }

  onFetchFailure = errMsg => {
    this.setState({errMsg, status: apiConstants.failure})
  }

  onFetchSuccess = data => {
    this.setState({status: apiConstants.progress})
    const videoItemDetails = {
      id: data.id,
      title: data.title,
      videoUrl: data.video_url,
      thumbnailUrl: data.thumbnail_url,
      channel: {
        name: data.channel.name,
        profileImageUrl: data.channel.profile_image_url,
        subscriberCount: data.channel.subscriber_count,
      },
      viewCount: data.view_count,
      publishedAt: data.published_at,
      description: data.description,
    }
    this.setState({videoItemDetails, status: apiConstants.success})
  }

  getVideoDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(
      `https://apis.ccbp.in/videos/${id.slice(1)}`,
      options,
    )
    const data = await response.json()
    if (response.ok) {
      this.onFetchSuccess(data.video_details)
    } else {
      this.onFetchFailure(data.error_msg)
    }
  }

  render() {
    const {videoItemDetails} = this.state
    console.log(videoItemDetails)
    return (
      <>
        <Header />
      </>
    )
  }
}

export default VideoItemDetails
