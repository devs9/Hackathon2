import React, { PureComponent } from 'react'
import { withRouter } from 'react-router'
import { Switch } from 'react-router-dom'
import { RootStack } from './routes'
import Header from './components/organisms/Header'
import GlobalStyle from './theme/GlobalStyle'

class App extends PureComponent {
  render() {
    return (
      <>
        <Header />
        <Switch>
          <RootStack />
        </Switch>
        <GlobalStyle />
      </>
    )
  }
}
export default withRouter(App)
