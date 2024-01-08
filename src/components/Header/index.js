import {withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'

import {BsMoon, BsBrightnessHigh} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'

import {
  NavbarHeader,
  WebsiteLogo,
  LogoLink,
  ActionContainer,
  ThemeButton,
  ProfileImage,
  LogoutButton,
  LogoutIconButton,
  ModalContainer,
  ModalDesc,
  ButtonContainer,
  CloseButton,
  ConfirmButton,
} from './styledComponent'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

const Header = props => (
  <ThemeAndVideoContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const bgColor = isDarkTheme ? '#231f20' : '#f1f5f9'
      const color = isDarkTheme ? '#ffffff' : '#00306e'

      const websiteLogoImg = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

      const onClickChangeTheme = () => {
        toggleTheme()
      }

      const onClickLogout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      return (
        <NavbarHeader bgColor={bgColor}>
          <LogoLink to="/">
            <WebsiteLogo src={websiteLogoImg} alt="website logo" />
          </LogoLink>
          <ActionContainer>
            <ThemeButton
              type="button"
              onClick={onClickChangeTheme}
              data-testid="theme"
            >
              {isDarkTheme ? (
                <BsBrightnessHigh color="#ffffff" size={25} />
              ) : (
                <BsMoon size={25} />
              )}
            </ThemeButton>
            <ProfileImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
            />
            <Popup
              modal
              trigger={
                <LogoutButton type="button" color={color} bgColor={bgColor}>
                  Logout
                </LogoutButton>
              }
            >
              {close => (
                <ModalContainer isDarkTheme>
                  <ModalDesc isDarkTheme>
                    Are you sure, you want to logout?
                  </ModalDesc>
                  <ButtonContainer>
                    <CloseButton
                      type="button"
                      onClick={() => close()}
                      data-testid="closeButton"
                      isDarkTheme
                    >
                      Cancel
                    </CloseButton>
                    <ConfirmButton type="button" onClick={onClickLogout}>
                      Confirm
                    </ConfirmButton>
                  </ButtonContainer>
                </ModalContainer>
              )}
            </Popup>
            <Popup
              modal
              trigger={
                <LogoutIconButton type="button">
                  <FiLogOut size={25} color={color} />
                </LogoutIconButton>
              }
              className="popup-content"
            >
              {close => (
                <ModalContainer isDarkTheme>
                  <ModalDesc isDarkTheme>
                    Are you sure, you want to logout?
                  </ModalDesc>
                  <ButtonContainer>
                    <CloseButton
                      type="button"
                      onClick={() => close()}
                      data-testid="closeButton"
                      isDarkTheme
                    >
                      Cancel
                    </CloseButton>
                    <ConfirmButton type="button" onClick={onClickLogout}>
                      Confirm
                    </ConfirmButton>
                  </ButtonContainer>
                </ModalContainer>
              )}
            </Popup>
          </ActionContainer>
        </NavbarHeader>
      )
    }}
  </ThemeAndVideoContext.Consumer>
)

export default withRouter(Header)
