import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import All from './assets/All.jsx';
import Complete from './assets/Complete.jsx';
import Home from './assets/Home.jsx';
import Today from './assets/Today.jsx';
import './index.css';
import Layout from './Layout.jsx';
import { store } from './stores/store.js';
const router = createBrowserRouter(
  [{
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path:"all",
        element:<All/>
      },
      {
        path:"complete",
        element:<Complete/>
      },
      {
        path:"today",
        element:<Today/>
      },
    ]
  }]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
