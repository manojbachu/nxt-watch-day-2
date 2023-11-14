import {Component} from 'react'
import Cookies from 'js-cookie'

class VideoItemDetails extends Component {
  state = {videoItemDetails: {}}

  componentDidMount() {
    this.getVideoDetails()
  }

  onFetchSuccess = data => {
    const videoDetails = data.video_details
    const updatedData = {
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
    const response = await fetch(`https://apis.ccbp.in/videos/${id}`, options)
    const data = await response.json()
    if (response.ok) {
      this.onFetchSuccess(data.videos)
    } else {
      this.onFetchFailure(data.error_msg)
    }
  }

  render() {
    return <p>hello</p>
  }
}

export default VideoItemDetails
