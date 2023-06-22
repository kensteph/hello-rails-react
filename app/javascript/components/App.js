import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Greetings from './Greetings';
import { Provider } from 'react-redux';
import store from '../redux/store';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Greetings/>
  },
]);

const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
}

export default App