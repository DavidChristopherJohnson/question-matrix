import React, { useState } from "react";
import { IQuestion } from "./IQuestion";

type QuestionComponentParams = {
  isLastQuestion: boolean;
  question: IQuestion;
  onAnswerSubmit: (question: IQuestion, answer: number) => void;
};

const QuestionComponent = ({
  isLastQuestion,
  question,
  onAnswerSubmit,
}: QuestionComponentParams) => {
  const [answer, setAnswer] = useState<number>(2);

  const buttonText = isLastQuestion ? "Finish" : "Next";

  return (
    <>
      <div style={{ height: "200px", width: '80vw' }}>
        <div style={{height: "100px"}}>
          <h1>{question.text}</h1>
        </div>
        <input
          style={{height:'50px', fontSize:'16pt', fontWeight:'bold', width: '50px', textAlign: 'center', scrollbarWidth: 'none'}}
          type="number"          
          required={true}
          defaultValue={answer}
          onChange={(e) => {
            setAnswer(e.target.valueAsNumber);
          }}
        ></input>
      </div>

      <button 
      style={{height: '30px', width:'100px', fontSize: '16pt'}}
      onClick={() => onAnswerSubmit(question, answer)}>
        {buttonText}
      </button>
    </>
  );
};

export default QuestionComponent;
