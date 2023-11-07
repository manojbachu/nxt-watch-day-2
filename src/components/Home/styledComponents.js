import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  width: 100vw;
`

export const FeaturesContainer = styled.div`
  width: 100px;
`

export const VideoSection = styled.div`
  width: 100%;
`

export const PremiumContainer = styled.div`
  width: 100%;
  padding: 10px 20px 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  @media (min-width: 767px) {
    background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
    background-size: cover;
  }
`

export const PremiumSubContainer = styled.div``

export const NxtWatchLogo = styled.img`
  width: 150px;
`
export const PremiumPara = styled.p`
  font-weight: 500;
  font-family: 'Roboto';
  font-size: 20px;
  color: #475569;
  line-height: 35px;
  @media (min-width: 767px) {
    width: 420px;
  }
`

export const GetItNowBtn = styled.button`
  background: none;
  font-weight: 550;
  font-size: 16px;
  padding: 8px 12px 8px 12px;
  margin-top: 10px;
`
export const PremiumAddRemoveBtn = styled.button`
  border: none;
  outline: none;
  background: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 26px;
`
