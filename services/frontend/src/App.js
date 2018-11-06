import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { MuiThemeProvider } from '@material-ui/core/styles'

// Pages
import Dashboard from 'pages/dashboard'
import Landing from 'pages/landing'
import Login from 'pages/login'
import NoPage from 'pages/nopage'

import store from 'store'
import theme from 'theme'


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/landing" component={Landing} />
              <Route exact path="/login" component={Login} />
              <Route path="*" component={NoPage} />
            </Switch>
          </BrowserRouter>
        </MuiThemeProvider>
      </Provider>
    )
  }
}
