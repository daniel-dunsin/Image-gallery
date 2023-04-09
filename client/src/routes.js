import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import FolderImages from "./pages/folderImages";
import Error from "./pages/Error";
import NotFound from "./pages/404";

// All Routes

export const routes = createBrowserRouter([
  { path: "/", element: <Home />, errorElement: <Error /> },
  { path: "/login", element: <Login />, errorElement: <Error /> },
  { path: "/register", element: <Register />, errorElement: <Error /> },
  { path: "/folder/:id", element: <FolderImages />, errorElement: <Error /> },
  // Error Page
  { path: "*", element: <NotFound /> },
]);
