import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import HomePage from "./HomePage";
import Layout from "./Layout";
import WorksPage from "./WorksPage";
import AboutMePage from "./AboutMePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "worksPage", element: <WorksPage /> },
      { path: "aboutMePage", element: <AboutMePage /> },
    ],
  },
]);

export default router;
