import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavbarHeader = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: ${props => props.bgColor};
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
  @media screen and (min-width: 768px) {
    padding-left: 30px;
    padding-right: 30px;
  }
`
export const WebsiteLogo = styled.img`
  width: 80px;
  height: 30px;
  @media screen and (min-width: 768px) {
    width: 100px;
    height: 40px;
  }
`
export const LogoLink = styled(Link)`
  text-decoration: none;
`
export const ActionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
export const ThemeButton = styled.button`
  border: none;
  background: none;
  margin-right: 10px;
  cursor: pointer;
`

export const ProfileImage = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`
export const LogoutButton = styled.button`
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
  border: 1px solid;
  border-radius: 5px;
  border-color: ${props => props.color};
  margin-left: 6px;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const LogoutIconButton = styled.button`
  background: none;
  border: none;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 150px;
  width: 250px;
  border-radius: 10px;
  padding: 20px;
  background-color: ${props => (props.isDarkTheme ? '#475569' : '#cbd5e1')};
  @media screen and (min-width: 768px) {
    height: 200px;
    width: 400px;
  }
`
export const ModalDesc = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  margin: 10px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : 'black')};
  text-align: center;
`
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const CloseButton = styled.button`
  background-color: transparent;
  border: 1px solid ${props => (props.isDarkTheme ? '#ffffff' : 'gray')};
  padding: 8px;
  padding-left: 12px;
  padding-right: 12px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : 'gray')};
  margin: 12px;
  outline: none;
  cursor: pointer;
  border-radius: 6px;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 12px;
  @media screen and (min-width: 768px) {
    font-size: 15px;
    padding: 13px;
    padding-right: 20px;
    padding-left: 20px;
  }
`
export const ConfirmButton = styled.button`
  font-family: 'Roboto';
  align-self: flex-end;
  background-color: #3b82f6;
  color: white;
  padding: 8px;
  padding-right: 12px;
  padding-left: 12px;
  border: 1px solid #3b82f6;
  margin: 10px;
  outline: none;
  cursor: pointer;
  border-radius: 6px;
  font-weight: bold;
  font-size: 12px;
  @media screen and (min-width: 768px) {
    font-size: 15px;
    padding: 13px;
    padding-right: 20px;
    padding-left: 20px;
  }
`
