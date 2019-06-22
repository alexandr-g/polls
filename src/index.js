import React from 'react'
import ReactDOM from 'react-dom'
import Polls from './components/Polls'

const App = () => {
  return <Polls />
}

ReactDOM.render(<App />, document.querySelector('#app'))
