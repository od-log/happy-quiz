import {
  ENCODING,
  QUIZ_ANSWER_TYPE,
  QUIZ_CATEGORY,
  QUIZ_COUNT,
  QUIZ_DIFFICULTY,
} from "@src/constants.ts";
import { QuizResponse, Quiz } from "../types/api";
import { httpMehthod } from "./common";
import requester from "./requester";

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
