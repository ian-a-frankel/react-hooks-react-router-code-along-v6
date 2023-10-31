import React from "react";
import ReactDOM from "react-dom/client";
import About from "./pages/About";
import Login from "./pages/Login";
import UserProfile from "./pages/UserProfile";
import ErrorPage from "./pages/ErrorPage";
import routes from "./routes.js";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";

const router = createBrowserRouter(routes);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);