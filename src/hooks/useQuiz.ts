import { getQuizList } from "@src/apis/quiz";
import { Quiz } from "@src/types/api";
import { shuffleArray } from "@src/utils/random";
import { useQuery } from "@tanstack/react-query";

const useQuiz = () => {
  const { data: quizList } = useQuery<Quiz[]>(
    ["getQuizList"],
    async () => getQuizList(),
    { staleTime: 1000 * 60 * 60 }
  );

  Array.isArray(quizList) &&
    quizList.map((item, index) => {
      let answerList: string[] = [];
      answerList.push(item.correct_answer);
      answerList = answerList.concat(item.incorrect_answers);
      shuffleArray(answerList);
      item.answerList = answerList;
    });

  return { quizList };
};

export default useQuiz;
