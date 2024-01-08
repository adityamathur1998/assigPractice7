import styled from 'styled-components'

export const VideoCardList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  @media screen and (min-width: 768px) {
    margin-left: 20px;
  }
`

export const NoVideoView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: none;
`
export const NoVideoImage = styled.img`
  width: 200px;
  @media screen and (min-width: 768px) {
    width: 450px;
  }
`
export const NoVideoHeading = styled.h1`
  font-family: 'Roboto';
  color: ${props => props.headingColor};
  font-size: 25px;
`

export const NoVideoNote = styled.p`
  font-family: 'Roboto';
  color: ${props => props.noteColor};
  font-size: 18px;
`

export const RetryButton = styled.button`
  cursor: pointer;
  font-family: 'Roboto';
  background-color: #4f46e5;
  border: none;
  border-radius: 3px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-top: 5px;
  font-size: 15px;
`
