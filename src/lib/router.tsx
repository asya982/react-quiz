import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "../App";
import QuizPage from "../components/QuizPage/QuizPage";
import EmailPage from "../components/EmailPage/EmailPage";
import ThankYouPage from "../components/ThankYouPage/ThankYouPage";
import FinishPage from "../components/FinishPage/FinishPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Navigate to="quiz/1" replace={true} /> },
      { path: "quiz/:questionId", element: <QuizPage /> },
      { path: "finish", element: <FinishPage /> },
      { path: "email", element: <EmailPage /> },
      { path: "thank-you", element: <ThankYouPage /> },
    ],
  },
]);
