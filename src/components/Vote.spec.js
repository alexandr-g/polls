import React from 'react'
import { shallow } from 'enzyme'
import { Link } from 'react-router-dom'

import Vote from './Vote'

let component

beforeEach(() => {
  component = shallow(<Vote />)
})

it('should render vote completed message.', () => {
  expect(component.text()).toContain('Your vote has been completed! Thanks!')
})

it('should render link to go back.', () => {
  expect(component.find(Link)).toHaveLength(1)
})
