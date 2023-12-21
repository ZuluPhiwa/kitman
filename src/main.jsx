import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import About from './components/About'
import Contact2 from './components/Contact2'
import Footer2 from './components/Footer2'
import Home from './components/Home'
import Shop from './components/Shop'
import Cart from './components/Cart.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/kitman/",
    element: <App />,
    children: [
      {
        path: "/kitman/",
        element: <Home />,
      },
      {
        path: "/kitman/contact",
        element: <Contact2 />,
      },
      {
        path: "/kitman/shop",
        element: <Shop />,
      },
      {
        path: "/kitman/about",
        element: <About />,
      },
      {
        path: "/kitman/cart",
        element: <Cart />,
      },
      {
        path: "/kitman/footer",
        element: <Footer2 />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
