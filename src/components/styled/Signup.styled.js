import styled from 'styled-components'

const Signup = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  & > form {
    background-color: ${props => props.theme.elevation_1};
    border-radius: 5px;
    height: 400px;
    width: 90%;
    max-width: 500px;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    align-items: center;
    box-shadow: ${props => props.theme.shadow};
    text-align: center;
    
    h1 {
      font-family: 'montserrat', sans-serif;
      font-weight: 500;
      font-size: 1.5rem;
      letter-spacing: 1rem;
      margin-right: -1rem;
      line-height: 3.5rem;
    }
  }
`

export const SignupButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-size: 0.9rem;
  line-height: 1.2rem;
  width: 90%;
  max-width: 200px;
  height: 10%;
  border-radius: 3px;
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  border: 0;
  outline: none;
  cursor: pointer;
  color: ${props => props.theme.textBtn};
  background-color: ${props => props.theme.primary};

  &:focus,
  &:hover {
    -moz-appearance: none;
    -webkit-appearance: none;
    border: none;
    outline: none;
  }

  &:hover {
    background-color: ${props => props.theme.primaryHover};
  }

  &:active {
    transform: scale(0.98);
  }
`

export default Signup