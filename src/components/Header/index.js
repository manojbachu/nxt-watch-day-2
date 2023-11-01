import {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {FiSun, FiLogOut} from 'react-icons/fi'
import {HiMoon} from 'react-icons/hi'
import {IoReorderThreeSharp} from 'react-icons/io5'

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
  LogoutIconBtn,
  HamburgerBtn,
  ProfileButton,
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
                    src={
                      mode === 'lightMode'
                        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                    }
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
                    <ProfileButton>
                      <ProfileImage
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                        alt="profile"
                      />
                    </ProfileButton>
                    <HamburgerBtn currentMode={mode}>
                      <IoReorderThreeSharp />
                    </HamburgerBtn>
                  </NavElement>
                  <NavElement>
                    <LogoutButton type="button">Logout</LogoutButton>
                    <LogoutIconBtn iconClr={mode} type="button">
                      <FiLogOut />
                    </LogoutIconBtn>
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
