import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {CgPlayListAdd} from 'react-icons/cg'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  Navbar,
  NavbarLgContainer,
  NavOptions,
  NavLink,
  NavLinkContainer,
  NavText,
  ContactInfo,
  ContactHeading,
  ContactIcons,
  ContactImage,
  ContactNote,
  NavbarSmallContainer,
} from './styledComponent'

const NavigationBar = () => (
  <ThemeAndVideoContext.Consumer>
    {value => {
      const {isDarkTheme, activeTab, changeTab} = value
      const bgColor = isDarkTheme ? '#231f20' : '#f1f5f9'
      const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'
      const activeTabBg = isDarkTheme ? '#475569' : '#cbd5e1'

      const onClickTabHome = () => {
        changeTab('Home')
      }

      const onClickTabTrending = () => {
        changeTab('Trending')
      }

      const onClickTabGaming = () => {
        changeTab('Gaming')
      }

      const onClickTabSaved = () => {
        changeTab('Saved')
      }

      return (
        <Navbar>
          <NavbarLgContainer bgColor={bgColor}>
            <NavOptions>
              <NavLink to="/">
                <NavLinkContainer
                  onClick={onClickTabHome}
                  bgColor={activeTab === 'Home' ? activeTabBg : 'none'}
                  key="home"
                >
                  <AiFillHome
                    size={30}
                    color={activeTab === 'Home' ? '#ff0b37' : '#909090'}
                  />
                  <NavText textColor={textColor}>Home</NavText>
                </NavLinkContainer>
              </NavLink>

              <NavLink to="/trending">
                <NavLinkContainer
                  onClick={onClickTabTrending}
                  bgColor={activeTab === 'Trending' ? activeTabBg : 'none'}
                  key="trending"
                >
                  <HiFire
                    size={30}
                    color={activeTab === 'Trending' ? '#ff0b37' : '#909090'}
                  />
                  <NavText textColor={textColor}>Trending</NavText>
                </NavLinkContainer>
              </NavLink>

              <NavLink to="/gaming">
                <NavLinkContainer
                  onClick={onClickTabGaming}
                  bgColor={activeTab === 'Gaming' ? activeTabBg : 'none'}
                >
                  <SiYoutubegaming
                    size={30}
                    color={activeTab === 'Gaming' ? '#ff0b37' : '#909090'}
                  />
                  <NavText textColor={textColor}>Gaming</NavText>
                </NavLinkContainer>
              </NavLink>

              <NavLink to="/saved-videos">
                <NavLinkContainer
                  onClick={onClickTabSaved}
                  bgColor={activeTab === 'Saved' ? activeTabBg : 'none'}
                >
                  <CgPlayListAdd
                    size={30}
                    color={activeTab === 'Gaming' ? '#ff0b37' : '#909090'}
                  />
                  <NavText textColor={textColor}>Saved Videos</NavText>
                </NavLinkContainer>
              </NavLink>
            </NavOptions>

            <ContactInfo>
              <ContactHeading color={textColor}>CONTACT US</ContactHeading>
              <ContactIcons>
                <ContactImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  alt="facebook logo"
                />
                <ContactImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  alt="twitter logo"
                />
                <ContactImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  alt="linked in logo"
                />
              </ContactIcons>
              <ContactNote color={textColor}>
                Enjoy! Now to see your channels and recommendations!
              </ContactNote>
            </ContactInfo>
          </NavbarLgContainer>
          <NavbarSmallContainer>
            <NavLink to="/">
              <AiFillHome
                size={30}
                onClick={onClickTabHome}
                color={activeTab === 'Home' ? '#ff0b37' : '#909090'}
              />
            </NavLink>
            <NavLink to="/trending">
              <HiFire
                size={30}
                onClick={onClickTabTrending}
                color={activeTab === 'Trending' ? '#ff0b37' : '#909090'}
              />
            </NavLink>
            <NavLink to="/gaming">
              <SiYoutubegaming
                size={30}
                onClick={onClickTabGaming}
                color={activeTab === 'Gaming' ? '#ff0b37' : '#909090'}
              />
            </NavLink>
            <NavLink to="/saved-video">
              <CgPlayListAdd
                size={30}
                onClick={onClickTabSaved}
                color={activeTab === 'Saved' ? '#ff0b37' : '#909090'}
              />
            </NavLink>
          </NavbarSmallContainer>
        </Navbar>
      )
    }}
  </ThemeAndVideoContext.Consumer>
)

export default NavigationBar
