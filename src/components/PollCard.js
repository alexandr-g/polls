import React from 'react'
import { withRouter } from 'react-router'
import styled from 'styled-components'

const options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
}

const PollCard = ({ poll, history }) => {
  return (
    <CardWrapper>
      <CardHeading onClick={() => history.push(`${poll.url}`)}>
        {poll.question}
      </CardHeading>

      <CardOption>Choices: {poll.choices.length}</CardOption>

      <CardOption>
        {new Date(poll.published_at).toLocaleDateString('en-US', options)}
      </CardOption>

      <CardButton onClick={() => history.push(`${poll.url}`)}>Vote</CardButton>
    </CardWrapper>
  )
}

export default withRouter(PollCard)

const CardWrapper = styled.div`
  overflow: hidden;
  padding: 0 0 32px;
  margin: 48px auto 0;
  width: 300px;
  font-family: Quicksand, arial, sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
`

const CardHeading = styled.h1`
  font-size: 24px;
  font-weight: bold;
  text-align: center;

  &:hover {
    cursor: pointer;
  }
`

const CardOption = styled.small`
  margin-left: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  display: block;
  width: 100%;
  font-size: 12px;
  text-align: left;
  text-transform: uppercase;
`
export const CardButton = styled.button`
  display: block;
  width: 100%;
  padding: 12px 0;
  font-family: inherit;
  font-size: 14px;
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
