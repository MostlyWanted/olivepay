import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter
} from "react-router-dom";
import Home from './components/home';
import Merchants from './components/Merchants';
import Pands from './components/Pands';
import Support from './components/Support';
import contactus from './components/contactus';
import Navbar from './components/navbar';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "merchants",
    element: <Merchants/>,
  },
  {
    path: "pands",
    element: <Pands/>,
  },
  {
    path: "support",
    element: <Support/>,
  },
  {
    path: "contactus",
    element: <contactus/>,
  },
  {
    path: "navbar",
    element: <Navbar/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

<App></App>

);

{/* <RouterProvider router={router}/> */}
// the abbove goes into the root to render the router function
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
