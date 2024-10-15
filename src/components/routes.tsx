import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import HomePage from "./HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
]);

export default router;
