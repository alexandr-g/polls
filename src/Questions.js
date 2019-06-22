import React, { useState, useEffect } from 'react'

const api = 'https://polls.apiblueprint.org/questions?page=1'

const Questions = () => {
  const [questions, setQuestions] = useState([])
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)

    fetch(api)
      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('Something went wrong ...')
        }
      })
      .then(questions => {
        setQuestions(questions)
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
        {questions.map(question => (
          <li key={question.published_at}>{question.question}</li>
        ))}
      </ul>
    </div>
  )
}

export default Questions
