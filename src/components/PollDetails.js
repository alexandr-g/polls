import React, { Fragment, useState, useEffect } from 'react'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import Loading from './Loading'

import api from '../api/index'

import { Header, Button } from './layout/Container'

const PollDetails = ({ match, history }) => {
  const [state, setState] = useState({ isLoading: false, poll: {}, choice: {} })

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

  const handleChoiceSelect = ({ choice, url }) => {
    setState({
      ...state,
      choice: {
        title: choice,
        url: url
      }
    })
  }

  const handleVoteSubmit = () => {
    api.vote(state.choice.url).then(() => history.push(`${match.url}/success`))
  }

  return (
    <Fragment>
      <Header>Question Detail</Header>
      <QuestionTitle>Question: {state.poll.question}</QuestionTitle>

      {state.poll.question ? (
        <Fragment>
          {state.poll.choices &&
            Object.keys(state.poll.choices).map(key => {
              return (
                <div
                  key={key}
                  onClick={() => handleChoiceSelect(state.poll.choices[key])}
                >
                  <span>{state.poll.choices[key].choice} </span>
                  <span>{state.poll.choices[key].votes} votes</span>
                </div>
              )
            })}
          <Button
            onClick={state.choice && state.choice.url ? handleVoteSubmit : null}
          >
            {' '}
            Save Vote
          </Button>
        </Fragment>
      ) : (
        <Fragment>
          <div>No question found</div>
          <Link to={`/`}>
            <Button>Go back</Button>
          </Link>
        </Fragment>
      )}
    </Fragment>
  )
}

const QuestionTitle = styled.h2`
  padding-left: 80px;
  font-size: 30px;
`

export default withRouter(PollDetails)
