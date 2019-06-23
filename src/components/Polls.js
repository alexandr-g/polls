import React, { Fragment, useState, useEffect } from 'react'
import styled from 'styled-components'

import PollCard from './PollCard'
import Loading from './Loading'

import { Header } from './layout/Container'

import api from '../api/index'
import CreatePoll from './CreatePoll'

const Polls = () => {
  const [polls, setPolls] = useState([])
  const [isLoading, setLoading] = useState(false)
  const [createPoll, setCreatePoll] = useState(false)

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
      {createPoll ? (
        <CreatePoll />
      ) : (
        <Fragment>
          <Header>Questions</Header>
          <NewQuestionButton onClick={() => setCreatePoll(true)}>
            Create a new question
          </NewQuestionButton>
          <PollsContainer>
            {polls.map(poll => (
              <PollCard key={poll.published_at} poll={poll} />
            ))}
          </PollsContainer>
        </Fragment>
      )}
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

const NewQuestionButton = styled.button`
  display: block;
  width: 20%;
  padding: 12px 0;
  margin-left: 80px;
  font-family: inherit;
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  background-color: #3cb371;
  border: 0;
  border-radius: 35px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);

  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
    transform: translate(0, -5px);
  }
`
