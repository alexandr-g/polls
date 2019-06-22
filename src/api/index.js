async function getQuestions() {
  let questions
  try {
    let response = await fetch(
      'https://polls.apiblueprint.org/questions?page=1'
    )
    if (!response.ok) {
      throw Error(response.statusText)
    }
    questions = await response.json()
  } catch (error) {
    throw new Error('Something went wrong...')
  }

  return questions
}

export default getQuestions
