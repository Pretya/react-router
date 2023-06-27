import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import AlbumList from './componets/AlbumList';
import PhotoList from './componets/PhotoList'


const router = createBrowserRouter([
  {
    path: "/", 
    element: <App />,
  },
  {
    path: "/albums/:id", 
    element: <AlbumList />,
  },
  {
    path: "/photos/:id", 
    element: <PhotoList />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);