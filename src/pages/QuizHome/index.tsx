import { Layout } from "@src/components";
import React from "react";

const QuizHome = () => {
  const onQuizStart = (e: React.MouseEvent<HTMLButtonElement>) => {};

  return (
    <Layout>
      <button className="start" onClick={onQuizStart}>
        퀴즈 풀기
      </button>
    </Layout>
  );
};

export default QuizHome;
