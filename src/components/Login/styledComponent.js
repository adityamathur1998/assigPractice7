import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: ${props => (props.isDarkTheme ? '#1e293b' : '#ffffff')};
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 350px;
  border-radius: 8px;
  padding: 30px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#ffffff')};
`
export const LoginLogo = styled.img`
  align-self: center;
  width: 180px;
  margin-bottom: 15px;
`

export const InputContainer = styled.div`
  width: 100%;
  margin-top: 15px;
`
export const InputLabel = styled.label`
  font-family: 'Roboto';
  font-size: 12px;
  color: #475569;
  font-weight: 500;
`

export const UserInput = styled.input`
  font-family: 'Roboto';
  font-size: 15px;
  color: #475569;
  outline: none;
  padding: 8px;
  width: 100%;
  border: 1px solid #94a3b8;
  border-radius: 4px;
  margin-top: 5px;
`

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 12px;
`

export const Checkbox = styled.input`
  width: 15px;
  height: 15px;
  margin-right: 5px;
`
export const ShowPassword = styled.label`
  font-family: 'Roboto';
  font-size: 15px;
  color: #1e293b;
`
export const LoginButton = styled.button`
  width: 100%;
  font-family: 'Roboto';
  background-color: #4f46e5;
  border: none;
  border-radius: 5px;
  font-size: 15px;
  height: 30px;
  color: #ffffff;
  margin-top: 20px;
`
export const SubmitError = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  color: #ff0b37;
`
