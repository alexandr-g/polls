import React from 'react'
import { shallow } from 'enzyme'
import PollCard from './PollCard'

let component

const poll = {
  url: '/questions/1',
  question: 'my question',
  published_at: '2015-05-27',
  choices: [{ url: '/questions/9/choices/65', votes: 639, choice: 'Tea' }]
}

beforeEach(() => {
  component = shallow(<PollCard.WrappedComponent poll={poll} />)
})

it('should render question.', () => {
  expect(component.text()).toContain(poll.question)
})

it('should render choices length.', () => {
  expect(component.text()).toContain(poll.choices.length)
})

it('should render formatted date.', () => {
  expect(component.text()).toContain('Wednesday, May 27, 2015')
})

it('should render button to vote.', () => {
  expect(component.text()).toContain('Vote')
})
