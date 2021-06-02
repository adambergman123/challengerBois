import GlobalStyles from './GlobalStyles';
import styled from 'styled-components';
import NavBar from './Components/NavBar';
import Card from './Components/Card/Card';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { blue, red } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue[200],
    },
    secondary: {
      main: red[100],
    },
  },
});

const Application = styled.div`
  //remove this css
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Application>
        <div>Hello mr world</div>
        <NavBar />

        <Card />
      </Application>
      <GlobalStyles />
    </ThemeProvider>
  );
};

export default App;
