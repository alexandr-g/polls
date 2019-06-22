import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import PollCard from './PollCard'
import Loading from './Loading'

import api from '../api/index'

import { Header } from './layout/Container'

const Polls = () => {
  const [polls, setPolls] = useState([])
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)

    api.getPolls().then(polls => {
      setPolls(polls)
      setLoading(false)
    })
  }, [])

  if (isLoading) {
    return <Loading />
  }

  return (
    <div>
      <Header>Questions</Header>
      <PollsContainer>
        {polls.map(poll => (
          <PollCard key={poll.published_at} poll={poll} />
        ))}
      </PollsContainer>
    </div>
  )
}

export default Polls

const PollsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 10px;
  padding: 1.5%;
  box-sizing: border-box;
  max-width: 1100px;
  margin: 0 auto;
`
