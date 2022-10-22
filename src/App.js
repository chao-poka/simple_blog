import StyledApp from './components/styled/App.styled'
import GlobalStyle from './components/styled/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import { darkTheme } from './themes'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyle />
        <StyledApp>Hello World</StyledApp>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;