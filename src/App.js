import React from "react";
import './App.css';
import Home from "./pages/Home/Home";
import { AlertContextProvider } from "./contexts/AlertContext/AlertContext";
import { LoadingIconContextProvider } from "./contexts/LoadingIconContext/LoadingIconContext";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
]);

const App = () => {
  return (
    <LoadingIconContextProvider>
      <AlertContextProvider>
        <RouterProvider router={router} />
      </AlertContextProvider>
    </LoadingIconContextProvider>
  );
};

export default App;