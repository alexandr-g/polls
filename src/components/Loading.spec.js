import React from 'react'
import { shallow } from 'enzyme'
import Loading from './Loading'

it('should render loading message.', () => {
  const component = shallow(<Loading />)
  expect(component.text()).toBe('Loading...')
})
