import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/app';
import { Provider } from 'react-redux';
import store from './store';
import { createMuiTheme, ThemeProvider} from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

ReactDOM.render(
  // <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
        </ThemeProvider>
    </Provider>,
  // </React.StrictMode>,
  document.getElementById('root')
);
