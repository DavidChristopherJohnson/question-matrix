import React, { useState } from "react";
import "./App.css";
import QuestionComponent from "./question/question-component";
import PersonalDriversData from "./data/personal-drivers-questions";
import { IQuestionGroup } from "./question/IQuestionGroup";
import { IQuestion } from "./question/IQuestion";

function App() {
  const [answers, setAnswers] = useState(new Map<IQuestionGroup, number>());
  const [currentQuestion, setCurrentQuestion] = useState(
    PersonalDriversData[0]
  );
  const [questionsVisible, setQuestionVisible] = useState(true);

  const handleAnswerSubmit = (question: IQuestion, answer: number) => {
    const currentTotal = answers.get(question.group) || 0;
    answers.set(question.group, currentTotal + answer);
    setAnswers(answers);
    //Moving next
    if (currentQuestion.id >= PersonalDriversData.length) {
      setQuestionVisible(false);
      return;
    }

    const nextQuestion = PersonalDriversData.find(
      (i) => i.id === currentQuestion.id + 1
    );

    if (!nextQuestion) {
      setQuestionVisible(false);
      return;
    }

    setCurrentQuestion(nextQuestion);
  };

  const ContentComponent = () => {
    if (questionsVisible) {
      return (
        <QuestionComponent
          isLastQuestion={currentQuestion.id === PersonalDriversData.length}
          question={currentQuestion}
          onAnswerSubmit={handleAnswerSubmit}
        />
      );
    }

    return (
      <div style={{width: '80vw'}}>
        <h1>Results</h1>
        <ul style={{margin: '0', padding: '0'}}>
          {
          [...answers.entries()].map((entry) => {
            console.log(answers);
            return (
              <li key={entry[0].id} style={{listStyle: 'none'}}>
                <h2>{entry[0].title}</h2>
                <span>{entry[1]}</span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  return (
    <div className="App">
      <ContentComponent />
    </div>
  );
}

export default App;
