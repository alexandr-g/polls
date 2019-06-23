import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { Route } from 'react-router'
import { BrowserRouter } from 'react-router-dom'

import Polls from './components/Polls'
import PollDetails from './components/PollDetails'
import Vote from './components/Vote'

const App = () => (
  <BrowserRouter>
    <Fragment>
      <Route exact path={['/', '/questions']} component={Polls} />
      <Route exact path='/questions/:questionId' component={PollDetails} />
      <Route path='/questions/:questionId/success' component={Vote} />
    </Fragment>
  </BrowserRouter>
)
ReactDOM.render(<App />, document.querySelector('#app'))
