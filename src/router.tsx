import { createBrowserRouter } from "react-router-dom";
import IndexPage from "./pages";
import SecondPage from "./pages/page2";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <IndexPage />,
  },
  {
    path: "/page2",
    element: <SecondPage />,
  },
]);
