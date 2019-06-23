import React from 'react'
import { Link } from 'react-router-dom'

import { Header, Button } from './layout/Container'

const Vote = () => (
  <div>
    <Header>Your vote has been completed! Thanks!</Header>

    <Link to={`/`}>
      <Button>Go back</Button>
    </Link>
  </div>
)

export default Vote
