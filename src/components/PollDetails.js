import React, { Fragment, useState, useEffect } from 'react'
import api from '../api/index'

const PollDetails = ({ match }) => {
  console.log(match)
  const [poll, setPoll] = useState({})

  useEffect(() => {
    const { questionId } = match.params
    api.getPoll(questionId).then(poll => {
      setPoll(poll)
    })
  }, [])

  return <div>Question: {poll.question}</div>
}

export default PollDetails
