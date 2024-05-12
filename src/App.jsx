import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <p>ElementLayout</p>,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
