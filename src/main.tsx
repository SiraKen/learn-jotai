import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { routes } from "./router";
import "./index.css";
import { Provider as JotaiProvider } from "jotai";
import { store } from "./contexts/NameStore";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <HelmetProvider>
      <JotaiProvider store={store}>
        <RouterProvider router={routes} />
      </JotaiProvider>
    </HelmetProvider>
  </React.StrictMode>
);
