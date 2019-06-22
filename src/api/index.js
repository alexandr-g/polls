async function getPolls() {
  let polls
  try {
    let response = await fetch(
      'https://polls.apiblueprint.org/questions?page=1'
    )
    if (!response.ok) {
      throw Error(response.statusText)
    }
    polls = await response.json()
  } catch (error) {
    throw new Error('Something went wrong...')
  }

  return polls
}

export default getPolls
