import { QUIZ_COUNT } from "@src/constants.ts";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import * as S from "./styled";

type Props = {
  data: string[] | undefined;
  correctAnswer: string;
  qId: string | undefined;
};

const Answer = ({ data, correctAnswer, qId }: Props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [answers, setAnswers] = useState<{
    [k: string]: { selectedAnswer: string; mark: string };
  }>();
  let answerObj = localStorage.getItem("answerObj");
  let newAnswerObj: { [k: string]: { selectedAnswer: string; mark: string } } =
    {};
  if (answerObj) newAnswerObj = JSON.parse(answerObj);
  const [selected, setSelected] = useState(
    qId && newAnswerObj[qId]?.selectedAnswer
  );

  useEffect(() => {
    setAnswers(newAnswerObj);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (qId && newAnswerObj[qId]) return;
    let selectedAnswer = e.currentTarget.innerHTML;
    setSelected(e.currentTarget.innerHTML);
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
            <S.Example
              key={item}
              onClick={handleClick}
              clicked={window.atob(item) === selected}
              correct={
                selected !== undefined &&
                window.atob(item) === window.atob(correctAnswer)
              }
            >
              {window.atob(item)}
            </S.Example>
          );
        })}

      <S.ButtonArea>
        {selected &&
          qId &&
          Number(qId) < QUIZ_COUNT - 1 &&
          location.state !== "note" && (
            <button onClick={handleNextClick}>다음</button>
          )}
        {qId && Number(qId) === QUIZ_COUNT - 1 && location.state !== "note" && (
          <button onClick={handleResultClick}>퀴즈 결과 보기</button>
        )}
        {location.state === "note" && (
          <button onClick={() => navigate("/note")}>오답 노트 보기</button>
        )}
      </S.ButtonArea>
    </>
  );
};

export default Answer;
