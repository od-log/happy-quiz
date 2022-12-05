import { useParams } from "react-router-dom";
import { CardLayout } from "@src/components";
import Answer from "@src/components/Answer";
import useQuiz from "@src/hooks/useQuiz";
import { CardContent } from "@mui/material";
import * as S from "./styled";

const QuizPage = () => {
  const { quizList } = useQuiz();
  const { qId } = useParams();

  return (
    <CardLayout>
      {Array.isArray(quizList) && (
        <CardContent key={quizList[Number(qId)].correct_answer}>
          <S.Question>
            {`${Number(qId) + 1}. ${window.atob(
              quizList[Number(qId)].question
            )}`}
          </S.Question>
          <Answer
            data={quizList[Number(qId)].answerList}
            correctAnswer={quizList[Number(qId)].correct_answer}
            qId={qId}
          />
        </CardContent>
      )}
    </CardLayout>
  );
};

export default QuizPage;
