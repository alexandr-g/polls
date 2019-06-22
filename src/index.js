import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { Route } from 'react-router'
import { BrowserRouter } from 'react-router-dom'

import Polls from './components/Polls'
import PollDetails from './components/PollDetails'

const App = () => (
  <BrowserRouter>
    <Fragment>
      <Route exact path={['/', '/questions']} component={Polls} />
      <Route exact path='/questions/:questionId' component={PollDetails} />
    </Fragment>
  </BrowserRouter>
)
ReactDOM.render(<App />, document.querySelector('#app'))
