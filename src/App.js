import StyledApp from './components/styled/App.styled'
import GlobalStyle from './components/styled/GlobalStyles'
import Signup from './components/Signup'
import { ThemeProvider } from 'styled-components'
import { darkTheme, monochromeTheme } from './themes'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyle />
        <StyledApp>
          <Signup>

          </Signup>
        </StyledApp>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;