/**
 * Wraps the whole app;
 * Entails all the providers to be used
 */

import React from "react";
import { RouterProvider } from "react-router-dom";
import { AppProvider } from "./context";
import { routes } from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <AppProvider>
        <RouterProvider router={routes} />
        <ToastContainer
          theme="light"
          position="top-center"
          closeOnClick={true}
          autoClose={3000}
          pauseOnHover={false}
        />
      </AppProvider>
    </>
  );
}

export default App;
