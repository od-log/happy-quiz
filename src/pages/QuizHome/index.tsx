import React, { useEffect, useState } from "react";
import { CardLayout } from "@src/components";
import { useNavigate } from "react-router-dom";
import * as S from "./styled";

const QuizHome = () => {
  const navigate = useNavigate();

  const onQuizStart = (e: React.MouseEvent<HTMLButtonElement>) => {
    let startTime = Date.now();
    localStorage.removeItem("answerObj");
    localStorage.setItem("startTime", startTime.toString());
    navigate("quiz/0");
  };

  return (
    <CardLayout>
      <S.ButtonLayout>
        <button onClick={onQuizStart}>퀴즈 풀기</button>
      </S.ButtonLayout>
    </CardLayout>
  );
};

export default QuizHome;
