import React, { useState, useEffect } from 'react'
import { getQuestions } from './api/index'

const Questions = () => {
  const [questions, setQuestions] = useState([])
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)

    getQuestions().then(questions => {
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
