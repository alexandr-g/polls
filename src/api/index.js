const BASE_URL = 'https://polls.apiblueprint.org/'

async function getPolls() {
  let polls
  try {
    let response = await fetch(`${BASE_URL}questions?page=1`)
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
    let response = await fetch(`${BASE_URL}questions/${id}`)
    if (!response.ok) {
      throw Error(response.statusText)
    }
    poll = await response.json()
  } catch (error) {
    throw new Error('Something went wrong...')
  }

  return poll
}

const api = {
  getPolls,
  getPoll
}

export default api
