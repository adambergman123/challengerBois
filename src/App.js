import GlobalStyles from './GlobalStyles'
import styled from 'styled-components'
import NavBar from './Components/NavBar'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { blue, red } from '@material-ui/core/colors'
import { Route, Switch } from 'react-router-dom'
import Home from './Components/Home/Home'
import TiltComponent from './Components/Cards/Tilt'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue[200],
    },
    secondary: {
      main: red[100],
    },
  },
})

const Application = styled.div`
  //remove this css
  margin-top: 80px;
`

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Application>
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
        <TiltComponent />
      </Application>
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App
