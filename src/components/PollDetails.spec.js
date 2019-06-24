import React from 'react'
import { shallow } from 'enzyme'
import PollDetails from './PollDetails'

let component

beforeEach(() => {
  component = shallow(<PollDetails.WrappedComponent />)
})

it('should render page heading.', () => {
  expect(component.text()).toContain('Question Detail')
})

it('should render "no question found" message if question is not present.', () => {
  expect(component.text()).toContain('No question found')
})
