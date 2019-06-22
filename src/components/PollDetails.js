import React, { Fragment, useState, useEffect } from 'react'
import styled from 'styled-components'

import Loading from './Loading'
import api from '../api/index'

import { Header } from './layout/Container'

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

  return (
    <div>
      <Header>Question Detail</Header>
      <QuestionTitle>Question: {state.poll.question}</QuestionTitle>
    </div>
  )
}

const QuestionTitle = styled.h2`
  padding-left: 80px;
  font-size: 30px;
`

export default PollDetails
