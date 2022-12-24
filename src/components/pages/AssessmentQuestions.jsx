import React, { useState } from 'react';


export default function AssessmentQuestions() {
    const questions = [
      {
        questionTest: 'Have you recently applied a job?',
        answerOptions: [
            { answerTest: 'Yes' },
            { answerTest: 'No' },

        ],
      },
      {
        questionTest: 'Did someone reach out for an interview?',
        answerOptions: [
            { answerTest: 'Yes' },
            { answerTest: 'No' },

        ],
      },

      {
        questionTest: 'Did you complete the interview?',
        answerOptions: [
            { answerTest: 'Yes' },
            { answerTest: 'No' },

        ],
      },

      {
        questionTest: 'How much time has passed since the interview?',
        answerOptions: [
            { answerTest: 'HOURS' },
            { answerTest: 'A DAY' },
            { answerTest: 'A FEW DAYS' },
            { answerTest: 'A WEEK' },
            { answerTest: 'MORE THAN A WEEK' },

        ],
      },

      {
        questionTest: 'How long ago?',
        answerOptions: [
            { answerTest: 'Yes' },
            { answerTest: 'No' },

        ],
      },
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);

  return (
    <div className='AssessmentQuestions'>

        <div className='question-section'>
           <div className='question-count'>
            <span>Question 1</span>
           </div>
           <div className='question-text'>(questions[currentQuestion].questionTest)</div>
        </div>
        <div className='answer-section'>
             {questions[0].answerOptions.map((answerOption) => (<button>(answerOption.answerTest)</button>) )}
        </div>
    </div>
  )
}

