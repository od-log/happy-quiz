import { CardLayout } from "@src/components";
import CardHeader from "@mui/material/CardHeader";
import { QUIZ_COUNT } from "@src/constants.ts";
import ChartPie from "@src/components/ChartPie";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Result = () => {
  const navigate = useNavigate();
  let answerObj = localStorage.getItem("answerObj");
  let newAnswerObj: { [k: string]: { selectedAnswer: string; mark: string } } =
    {};
  if (answerObj) newAnswerObj = JSON.parse(answerObj);

  let correctCount = Object.keys(newAnswerObj).filter(
    (item) => newAnswerObj[item]?.mark === "true"
  ).length;
  let wrongCount = QUIZ_COUNT - correctCount;

  let startTime = localStorage.getItem("startTime");
  let endTime = localStorage.getItem("endTime");
  let quizMillis = Number(endTime) - Number(startTime);

  return (
    <CardLayout>
      <CardHeader>퀴즈 결과</CardHeader>
      <dt>소요 시간</dt>
      <dd>{Math.floor(quizMillis / 1000)}초</dd>
      <dt>정답 개수</dt>
      <dd>{correctCount}개</dd>
      <dt>오답 개수</dt>
      <dd>{wrongCount} 개</dd>
      <div>차트</div>
      <ChartPie correctCount={correctCount} wrongCount={wrongCount} />
      <Button onClick={() => navigate(`/note`)}>오답 노트 보러 가기</Button>
    </CardLayout>
  );
};

export default Result;
