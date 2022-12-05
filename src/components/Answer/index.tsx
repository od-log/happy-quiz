import { QUIZ_COUNT } from "@src/constants.ts";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import useAnswerStore from "@src/zustand/useAnswerStore";

type Props = {
  data: string[] | undefined;
  correctAnswer: string;
  qId: string | undefined;
};

const Answer = ({ data, correctAnswer, qId }: Props) => {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState<{
    [k: string]: { selectedAnswer: string; mark: string };
  }>();
  let answerObj = localStorage.getItem("answerObj");
  let newAnswerObj: { [k: string]: { selectedAnswer: string; mark: string } } =
    {};
  if (answerObj) newAnswerObj = JSON.parse(answerObj);

  useEffect(() => {
    setAnswers(newAnswerObj);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (newAnswerObj.qId) return;
    let selectedAnswer = e.currentTarget.innerHTML;

    if (window.atob(correctAnswer) === selectedAnswer && qId) {
      newAnswerObj[qId] = { selectedAnswer: selectedAnswer, mark: "true" };
      localStorage.setItem("answerObj", JSON.stringify(newAnswerObj));
    } else if (qId) {
      newAnswerObj[qId] = { selectedAnswer: selectedAnswer, mark: "false" };
      localStorage.setItem("answerObj", JSON.stringify(newAnswerObj));
    }
  };

  const handleNextClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (qId) navigate(`/quiz/${Number(qId) + 1}`);
  };

  const handleResultClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    let endTime = Date.now();
    localStorage.setItem("endTime", endTime.toString());
    navigate(`/result`);
  };

  return (
    <>
      {Array.isArray(data) &&
        data.map((item: string, index: number) => {
          return (
            <div key={item} onClick={handleClick} data-index={index}>
              {window.atob(item)}
            </div>
          );
        })}
      {answers && qId && answers[qId].mark === "true" && <div>정답입니다</div>}
      {answers && qId && answers[qId].mark === "false" && <div>틀렸습니다</div>}
      {qId && Number(qId) < QUIZ_COUNT - 1 ? (
        <Button variant="contained" onClick={handleNextClick}>
          다음
        </Button>
      ) : (
        <Button variant="contained" onClick={handleResultClick}>
          결과 보기
        </Button>
      )}
    </>
  );
};

export default Answer;
