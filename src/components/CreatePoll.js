import React, { Fragment, useState } from 'react'
import styled from 'styled-components'

import api from '../api/index'

import { Header } from './styles/common'

const CreatePoll = () => {
  const [state, setState] = useState({ question: '', choices: [] })

  const handlePollCreate = () => {
    api.createPoll(state.question, state.choices)
  }

  const handleQuestionInput = event => {
    event.preventDefault()
    setState({ question: event.target.value })
  }

  const handleChoiceInput = event => {
    event.preventDefault()

    setState({ choices: [event.target.value] })
  }

  return (
    <Fragment>
      <Header>Create a new poll *</Header>

      <CardWrapper>
        <CardBody>
          <CardFieldset>
            <CardInput
              placeholder="Question"
              type="text"
              required
              onClick={handleQuestionInput}
            />
          </CardFieldset>

          <CardFieldset>
            <CardInput
              placeholder="Option 1"
              type="text"
              onClick={handleChoiceInput}
            />
          </CardFieldset>

          <CardFieldset>
            <CardInput
              placeholder="Option 2"
              type="text"
              onClick={handleChoiceInput}
            />
          </CardFieldset>
        </CardBody>

        <CardFieldset>
          <CardButton type="button" onClick={handlePollCreate}>
            Create a new poll
          </CardButton>
        </CardFieldset>

        <CardOptionsNote>
          * - intentionally limited functionality (number of options)
        </CardOptionsNote>
      </CardWrapper>
    </Fragment>
  )
}

export default CreatePoll

export const CardWrapper = styled.div`
  overflow: hidden;
  padding: 0 0 32px;
  margin: 48px auto 0;
  width: 300px;
  font-family: Quicksand, arial, sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
`
export const CardBody = styled.div`
  padding-right: 32px;
  padding-left: 32px;
`

export const CardFieldset = styled.fieldset`
  position: relative;
  padding: 0;
  margin: 0;
  border: 0;

  & + & {
    margin-top: 24px;
  }

  &:nth-last-of-type(2) {
    margin-top: 32px;
  }

  &:last-of-type {
    text-align: center;
  }
`

export const CardInput = styled.input`
  padding: 7px 0;
  width: 100%;
  font-family: inherit;
  font-size: 14px;
  border-top: 0;
  border-right: 0;
  border-bottom: 1px solid #ddd;
  border-left: 0;
  transition: border-bottom-color 0.25s ease-in;

  &:focus {
    border-bottom-color: #e5195f;
    outline: 0;
  }
`

export const CardButton = styled.button`
  display: block;
  width: 100%;
  padding: 12px 0;
  font-family: inherit;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  background-color: #e5195f;
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

export const CardOptionsNote = styled.small`
  padding-top: 8px;
  display: block;
  width: 100%;
  font-size: 12px;
  text-align: center;
  text-transform: uppercase;
`
