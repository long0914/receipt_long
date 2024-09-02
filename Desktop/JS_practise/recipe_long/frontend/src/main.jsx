import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './routes/Post.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NewPost from './routes/NewPost.jsx';
import RootLayout from './routes/RootLayout.jsx';

// Define an ErrorBoundary component
function ErrorBoundary({ error }) {
  return (
    <div>
      <h1>Something went wrong!</h1>
      <p>{error.message}</p>
    </div>
  );
}

const router = createBrowserRouter([
  {path: '/', element: <RootLayout />, children:[
    {
      path: '/',
      element: <App />,
      errorElement: <ErrorBoundary />
    },
    {
      path: '/create-post',
      element: <NewPost />,
      errorElement: <ErrorBoundary />
    }
  ]}
 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} /> 
  </React.StrictMode>,
);