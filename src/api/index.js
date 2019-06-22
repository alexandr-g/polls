async function getQuestions() {
  let response = await fetch('https://polls.apiblueprint.org/questions?page=1')
  let questions = await response.json()

  return questions
}

export default getQuestions
