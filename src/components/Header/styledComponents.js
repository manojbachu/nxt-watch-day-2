import styled from 'styled-components'

export const HeaderMainContainer = styled.div`
  background-color: ${props => props.currentMode === 'darkMode' && '#000000'};
`
export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: auto;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
  width: 90%;
`

export const LogoButton = styled.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
`
export const LogoImage = styled.img`
  width: 150px;
  @media (max-width: 576px) {
    width: 100px;
  }
`

export const NavElementsContainer = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;
  padding: 0;
`
export const NavElement = styled.li`
  margin-right: 15px;
`

export const NavElementBtn = styled.button`
  background: none;
  outline: none;
  cursor: pointer;
  border: none;
`
export const ProfileImage = styled.img`
  width: 30px;
`

export const LogoutButton = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 6px 15px 6px 15px;
  font-family: 'Roboto';
  font-weight: 500;
  border-radius: 3px;
  font-size: 14px;
`
