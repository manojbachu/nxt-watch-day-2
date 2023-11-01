import {Component} from 'react'

import {HomeContainer, FeaturesContainer} from './styledComponents'

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
        </HomeContainer>
      </>
    )
  }
}

export default Home
