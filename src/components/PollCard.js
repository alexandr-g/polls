import React from 'react'
import styled from 'styled-components'

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
`

const CardOptionsNote = styled.small`
  margin-left: 10px;
  padding-top: 10px;
  display: block;
  width: 100%;
  font-size: 12px;
  text-align: left;
  text-transform: uppercase;
`

const PollTile = ({ poll }) => {
  return (
    <CardWrapper>
      <CardHeading>{poll.question}</CardHeading>

      <CardOptionsNote>Choices: {poll.choices.length}</CardOptionsNote>

      <CardOptionsNote>Published at: {poll.published_at}</CardOptionsNote>
    </CardWrapper>
  )
}

export default PollTile
