import React, { Fragment, useState, useEffect } from 'react'

import Loading from './Loading'
import api from '../api/index'

const PollDetails = ({ match }) => {
  const [state, setState] = useState({ isLoading: false, poll: {} })

  useEffect(() => {
    const { questionId } = match.params

    setState({ isLoading: true })

    api.getPoll(questionId).then(poll => {
      setState({
        isLoading: false,
        poll
      })
    })
  }, [])

  if (state.isLoading) {
    return <Loading />
  }

  return <div>Question: {state.poll.question}</div>
}

export default PollDetails
