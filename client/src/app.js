import React from 'react'
import ReactDOM from 'react-dom'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import deepPurple from '@material-ui/core/colors/deepPurple';
import teal from '@material-ui/core/colors/teal';

// import { Provider } from 'react-redux'

// import initStore from './redux/store'
// import { defaultMainState } from './redux/main/reducer'

import App from './components/App'

// const store = initStore(defaultMainState)

const theme = createMuiTheme({
  palette: {
    primary: deepPurple,
    secondary: teal,
  },
  typography: {
    useNextVariants: true,
  },
});


const render = (Component) => {
  ReactDOM.render(
    // <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <Component />
    </MuiThemeProvider>,
    // </Provider>,
    document.getElementById('app'),
  )
}

render(App)
