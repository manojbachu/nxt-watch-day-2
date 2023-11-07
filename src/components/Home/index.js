import {Component} from 'react'

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
} from './styledComponents'

import Header from '../Header'

const apiConstants = {}

class Home extends Component {
  state = {feature: apiConstants.feature}

  featuresSection = () => {}

  render() {
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
          </VideoSection>
        </HomeContainer>
      </>
    )
  }
}

export default Home
