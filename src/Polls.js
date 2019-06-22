import React, { useState, useEffect } from 'react'

import PollTile from './PollTile'
import getPolls from './api/index'

const Polls = () => {
  const [polls, setPolls] = useState([])
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)

    getPolls().then(polls => {
      setPolls(polls)
      setLoading(false)
    })
  }, [])

  if (isLoading) {
    return <p>Loading ...</p>
  }

  return (
    <div>
      <h1>Questions</h1>
      <ul>
        {polls.map(poll => (
          <PollTile key={poll.published_at} poll={poll} />
        ))}
      </ul>
    </div>
  )
}

export default Polls
