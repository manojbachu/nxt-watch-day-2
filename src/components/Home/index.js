import {Component} from 'react'
import Cookies from 'js-cookie'

import {AiOutlineSearch} from 'react-icons/ai'

import {GrFormClose} from 'react-icons/gr'
import {
  HomeContainer,
  FeaturesContainer,
  VideoSection,
  PremiumContainer,
  PremiumSubContainer,
  NxtWatchLogo,
  PremiumPara,
  GetItNowBtn,
  PremiumAddRemoveBtn,
  VideosContainer,
  SearchContainer,
  SearchInput,
  SearchButton,
  VideoListContainer,
} from './styledComponents'

import Header from '../Header'

const apiConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  progress: 'PROGRESS',
}

class Home extends Component {
  state = {status: apiConstants.initial, searchInput: '', searchValue: ''}

  componentDidMount() {
    this.getVideos()
  }

  onFetchSuccess = data => {}

  getVideos = async () => {
    const {searchInput} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(
      `https://apis.ccbp.in/videos/all?search=${searchInput}`,
      options,
    )
    const data = await response.json()
    if (response.ok) {
      this.onFetchSuccess(data)
    } else {
      this.onFetchFailure()
    }
    console.log(data)
  }

  featuresSection = () => {}

  onChangeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickSearch = () => {
    const {searchInput} = this.state
    this.setState({searchValue: searchInput})
  }

  render() {
    const {searchInput} = this.state
    return (
      <>
        <Header />
        <HomeContainer>
          <FeaturesContainer>{this.featuresSection()}</FeaturesContainer>
          <VideoSection>
            <PremiumContainer>
              <PremiumSubContainer>
                <NxtWatchLogo
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                  alt="nxt watch logo"
                />
                <PremiumPara>
                  Buy Nxt Watch Premium prepaid plans with UPI
                </PremiumPara>
                <GetItNowBtn type="button">GET IT NOW</GetItNowBtn>
              </PremiumSubContainer>
              <PremiumAddRemoveBtn type="button">
                <GrFormClose />
              </PremiumAddRemoveBtn>
            </PremiumContainer>
            <VideosContainer>
              <SearchContainer>
                <SearchInput
                  type="search"
                  onChange={this.onChangeInput}
                  value={searchInput}
                />
                <SearchButton type="button" onClick={this.onClickSearch}>
                  <AiOutlineSearch />
                </SearchButton>
              </SearchContainer>
              <VideoListContainer>{}</VideoListContainer>
            </VideosContainer>
          </VideoSection>
        </HomeContainer>
      </>
    )
  }
}

export default Home
