import GlobalStyles from './GlobalStyles'
import styled from 'styled-components'
import NavBar from './Components/NavBar'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { blue, red } from '@material-ui/core/colors'
import { Route, Switch } from 'react-router-dom'
import Home from './Components/Home/Home'
import Test from './Components/Test'

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
    <>
      {/* With this component, the user automatically scrolls to the top of every loaded page */}
      <ThemeProvider theme={theme}>
        <NavBar />
        <Application>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/test' component={Test} />
          </Switch>
          {/*<TiltComponent />*/}
        </Application>
        <GlobalStyles />
      </ThemeProvider>
    </>
  )
}

export default App
