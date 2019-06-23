const BASE_URL = 'https://polls.apiblueprint.org'

async function getPolls() {
  let polls
  try {
    let response = await fetch(`${BASE_URL}/questions?page=1`)
    if (!response.ok) {
      throw Error(response.statusText)
    }
    polls = await response.json()
  } catch (error) {
    throw new Error('Something went wrong...')
  }

  return polls
}

async function getPoll(id) {
  let poll
  try {
    let response = await fetch(`${BASE_URL}/questions/${id}`)
    if (!response.ok) {
      throw Error(response.statusText)
    }
    poll = await response.json()
  } catch (error) {
    throw new Error('Something went wrong...')
  }

  return poll
}

const postVote = url =>
  fetch(`${BASE_URL}${url}`, {
    method: 'POST'
  })

const createPoll = (question, choices) => {
  fetch(`${BASE_URL}/questions`, {
    method: 'POST',
    body: JSON.stringify({ question, choices })
  }).then(res => {
    console.log('Request complete! response:', res)
  })
}

const api = {
  getPolls,
  getPoll,
  vote: postVote,
  createPoll
}

export default api
