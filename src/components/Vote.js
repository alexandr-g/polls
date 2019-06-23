import React from 'react'
import { Link } from 'react-router-dom'

import { Header, Button } from './styles/common'

const Vote = () => (
  <div>
    <Header>Your vote has been completed! Thanks!</Header>

    <Link to={`/`}>
      <Button>Go back</Button>
    </Link>
  </div>
)

export default Vote
