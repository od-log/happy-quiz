import { CardLayout } from "@src/components";
import { Answer } from "@src/types/storage";
import { useNavigate } from "react-router-dom";
import * as S from "./styled";

const ImproveNote = () => {
  const navigate = useNavigate();
  let answerObj = localStorage.getItem("answerObj");
  let newAnswerObj: Answer = {};
  if (answerObj) newAnswerObj = JSON.parse(answerObj);

  let wrongQuizList = Object.keys(newAnswerObj).filter(
    (item) => newAnswerObj[item]?.mark === "false"
  );

  return (
    <CardLayout>
      <S.Title>오답 노트</S.Title>
      <ul>
        {wrongQuizList &&
          wrongQuizList.map((item, index) => {
            return (
              <S.HoverBox
                onClick={() =>
                  navigate(`/quiz/${Number(item)}`, { state: "note" })
                }
                key={item}
              >
                {Number(item) + 1}번 문제 확인하기
              </S.HoverBox>
            );
          })}
      </ul>
    </CardLayout>
  );
};

export default ImproveNote;
