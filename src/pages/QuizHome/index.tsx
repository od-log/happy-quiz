import { Layout } from "@src/components";
import React from "react";
import { useNavigate } from "react-router-dom";

const QuizHome = () => {
  const navigate = useNavigate();
  const onQuizStart = (e: React.MouseEvent<HTMLButtonElement>) => {
    navigate("quiz/0");
  };

  return (
    <Layout>
      <button className="start" onClick={onQuizStart}>
        퀴즈 풀기
      </button>
    </Layout>
  );
};

export default QuizHome;
