import { QuizResponse, Quiz } from "../types/api";
import { httpMehthod } from "./common";
import requester from "./requester";

const QUIZ_COUNT = 15;
const QUIZ_CATEGORY = { COMPUTER: 18 };
const QUIZ_DIFFICULTY = "easy";
const QUIZ_ANSWER_TYPE = "multiple";
const ENCODING = "base64";

export const getQuizList = async () => {
  const { headers, status, payload } = await requester<QuizResponse>({
    method: httpMehthod.GET,
    url: "",
    params: {
      amount: QUIZ_COUNT,
      category: QUIZ_CATEGORY.COMPUTER,
      difficulty: QUIZ_DIFFICULTY,
      type: QUIZ_ANSWER_TYPE,
      encode: ENCODING,
    },
  });

  return payload.results;
};
