import { useNavigate, useParams } from "react-router-dom";
import { CardLayout } from "@src/components";
import CardHeader from "@mui/material/CardHeader";
import Answer from "@src/components/Answer";
import useQuiz from "@src/hooks/useQuiz";

const QuizPage = () => {
  const { quizList } = useQuiz();
  const { qId } = useParams();

  return (
    <CardLayout>
      <CardHeader>
        <div>퀴즈</div>
      </CardHeader>

      {Array.isArray(quizList) && (
        <div key={quizList[Number(qId)].correct_answer}>
          <div>
            {qId}
            {window.atob(quizList[Number(qId)].question)}
          </div>
          <Answer
            data={quizList[Number(qId)].answerList}
            correctAnswer={quizList[Number(qId)].correct_answer}
            qId={qId}
          />
        </div>
      )}
    </CardLayout>
  );
};

export default QuizPage;
