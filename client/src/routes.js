import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import FolderImages from "./pages/folderImages";
import Error from "./pages/Error";
import NotFound from "./pages/404";
import ProtectedRoute from "./components/containers/protectedRoute";

// All Routes

export const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    ),
    errorElement: <Error />,
  },
  { path: "/login", element: <Login />, errorElement: <Error /> },
  { path: "/register", element: <Register />, errorElement: <Error /> },
  {
    path: "/folder/:id",
    element: (
      <ProtectedRoute>
        <FolderImages />
      </ProtectedRoute>
    ),
    errorElement: <Error />,
  },
  // Error Page
  { path: "*", element: <NotFound /> },
]);
