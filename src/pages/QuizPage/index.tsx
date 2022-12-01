import { getQuizList } from "@src/apis/quiz";
import { Layout } from "@src/components";
import { Quiz, QuizResponse } from "@src/types/api";
import { useQuery } from "@tanstack/react-query";

const QuizPage = () => {
  const { data: quizList } = useQuery<Quiz[]>(
    ["getQuizList"],
    async () => getQuizList(),
    { staleTime: 1000 * 60 * 60 }
  );
  console.log(quizList);
  return (
    <Layout>
      <>
        <div>퀴즈</div>
        {Array.isArray(quizList) &&
          quizList.map((item, index) => {
            return (
              <div key={item.correct_answer}>
                <div key={item.correct_answer}>{atob(item.question)}</div>
                <div>{item.incorrect_answers}</div>
                <div>{atob(item.correct_answer)}</div>
              </div>
            );
          })}
      </>
    </Layout>
  );
};

export default QuizPage;
