/**
 * Wraps the whole app;
 * Entails all the providers to be used
 */

import React from "react";
import { RouterProvider } from "react-router-dom";
import { AppProvider } from "./context";
import { routes } from "./routes";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const client = new QueryClient();

  return (
    <>
      <QueryClientProvider client={client}>
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
      </QueryClientProvider>
    </>
  );
}

export default App;
