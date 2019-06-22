export const getQuestions = () =>
  fetch('https://polls.apiblueprint.org/questions?page=1').then(response =>
    response.json()
  )
