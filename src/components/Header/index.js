import {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {FiSun} from 'react-icons/fi'
import {HiMoon} from 'react-icons/hi'
import AppContext from '../../context/AppContext'

import './index.css'

import {
  HeaderMainContainer,
  HeaderContainer,
  LogoButton,
  LogoImage,
  NavElementsContainer,
  NavElement,
  NavElementBtn,
  ProfileImage,
  LogoutButton,
} from './styledComponents'

class Header extends Component {
  render() {
    return (
      <AppContext.Consumer>
        {value => {
          const {mode, onChangeMode} = value

          const onClickModeButton = () => {
            onChangeMode()
          }

          return (
            <HeaderMainContainer currentMode={mode}>
              <HeaderContainer>
                <LogoButton>
                  <LogoImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                    alt="nxt watch logo"
                  />
                </LogoButton>
                <NavElementsContainer>
                  <NavElement>
                    <NavElementBtn onClick={onClickModeButton}>
                      {mode === 'darkMode' ? (
                        <FiSun className="light-theme-icon" />
                      ) : (
                        <HiMoon className="dark-theme-icon" />
                      )}
                    </NavElementBtn>
                  </NavElement>
                  <NavElement>
                    <NavElementBtn>
                      <ProfileImage
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                        alt="profile"
                      />
                    </NavElementBtn>
                  </NavElement>
                  <NavElement>
                    <LogoutButton>Logout</LogoutButton>
                  </NavElement>
                </NavElementsContainer>
              </HeaderContainer>
            </HeaderMainContainer>
          )
        }}
      </AppContext.Consumer>
    )
  }
}

export default withRouter(Header)
