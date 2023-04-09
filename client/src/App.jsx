/**
 * Wraps the whole app;
 * Entails all the providers to be used
 */

import React from "react";
import { RouterProvider } from "react-router-dom";
import { AppProvider } from "./context";
import { routes } from "./routes";

function App() {
  return (
    <>
      <AppProvider>
        <RouterProvider router={routes} />
      </AppProvider>
    </>
  );
}

export default App;
