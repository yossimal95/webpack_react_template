import React from "react";
import './App.css';
import Home from "./pages/Home/Home";
import { AlertContextProvider } from "./contexts/AlertContext/AlertContext";
import { LoadingIconContextProvider } from "./contexts/LoadingIconContext/LoadingIconContext";
import Navbar from './components/Navbar/Navbar';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  { path: "/", element: <Home /> },
]);


const arrOfItems = [
    {
        text : "nav item",
        click: () => {},
        link: '/nav-item'
    }
];

const App = () => {
  return (
    <LoadingIconContextProvider>
      <AlertContextProvider>
        <Navbar arrOfItems={arrOfItems} />
        <RouterProvider router={router} />
      </AlertContextProvider>
    </LoadingIconContextProvider>
  );
};

export default App;