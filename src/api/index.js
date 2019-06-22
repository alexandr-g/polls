export const getQuestions = () =>
  fetch('https://polls.apiblueprint.org/questions?page=1').then(response => {
    if (response.ok) {
      return response.json()
    } else {
      throw new Error('Something went wrong...')
    }
  })
