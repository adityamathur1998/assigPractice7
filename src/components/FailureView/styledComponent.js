import styled from 'styled-components'

export const FailedView = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: none;
`

export const FailureImage = styled.img`
  width: 200px;
  @media screen and (min-width: 768px) {
    width: 450px;
  }
`
export const FailureHeading = styled.h1`
  font-family: 'Roboto';
  color: ${props => props.color};
  font-size: 25px;
  text-align: center;
`

export const FailureNote = styled.p`
  font-family: 'Roboto';
  color: ${props => props.color};
  font-size: 18px;
  text-align: center;
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
