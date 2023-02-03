import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { routes } from "./router";
import "./index.css";
import { Provider as JotaiProvider } from "jotai";
import { store } from "./contexts/NameStore";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <JotaiProvider store={store}>
      <RouterProvider router={routes} />
    </JotaiProvider>
  </React.StrictMode>
);
