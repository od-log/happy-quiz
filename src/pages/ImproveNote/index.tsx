import { CardLayout } from "@src/components";
import { Answer } from "@src/types/storage";
import { useNavigate } from "react-router-dom";

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
      <h2>오답 노트</h2>
      <ul>
        {wrongQuizList &&
          wrongQuizList.map((item, index) => {
            return (
              <li
                onClick={() =>
                  navigate(`/quiz/${Number(item)}`, { state: "note" })
                }
              >
                {Number(item) + 1}번 문제 확인하기
              </li>
            );
          })}
      </ul>
    </CardLayout>
  );
};

export default ImproveNote;
