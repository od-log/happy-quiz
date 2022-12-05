import { CardLayout } from "@src/components";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const QuizHome = () => {
  const navigate = useNavigate();
  const onQuizStart = (e: React.MouseEvent<HTMLButtonElement>) => {
    let startTime = Date.now();
    localStorage.setItem("startTime", startTime.toString());
    navigate("quiz/0");
  };

  return (
    <CardLayout>
      <Button variant="contained" className="start" onClick={onQuizStart}>
        퀴즈 풀기
      </Button>
    </CardLayout>
  );
};

export default QuizHome;
