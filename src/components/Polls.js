import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import PollCard from './PollCard'
import api from '../api/index'

const PollsHeader = styled.h1`
  padding-left: 80px;
  color: #e5195f;
  font-size: 40px;
`

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
    return <p>Loading ...</p>
  }

  return (
    <div>
      <PollsHeader>Questions</PollsHeader>
      <PollsContainer>
        {polls.map(poll => (
          <PollCard key={poll.published_at} poll={poll} />
        ))}
      </PollsContainer>
    </div>
  )
}

export default Polls
