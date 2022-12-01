import { Routes, Route } from "react-router-dom";
import { ROUTE_PATH } from "./routerPath";
import { QuizHome, QuizPage, Result, ImproveNote } from "@src/pages";

const routes = [
  { id: 1, path: ROUTE_PATH.HOME, element: <QuizHome /> },
  { id: 2, path: ROUTE_PATH.QUIZ, element: <QuizPage /> },
  { id: 3, path: ROUTE_PATH.RESULT, element: <Result /> },
  { id: 4, path: ROUTE_PATH.IMPROVE_NOTE, element: <ImproveNote /> },
];

const Router = () => {
  return (
    <Routes>
      {routes &&
        routes.map(({ id, path, element }) => (
          <Route key={id} path={path} element={element} />
        ))}
    </Routes>
  );
};

export default Router;
