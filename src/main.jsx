import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/Home/Home';
import About from './component/About/About';
import OrderReview from './component/OrderReview/OrderReview';
import Conatct from './component/Contact/Conatct';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=> fetch('t-shirt.json')
      },{
        path: "/about",
        element: <About></About>,
      },{
        path: "/review",
        element: <OrderReview></OrderReview>
      },{
        path: "/contact",
        element: <Conatct></Conatct>,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
