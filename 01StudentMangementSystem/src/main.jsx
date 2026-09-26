import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { Provider } from 'react-redux';
import { store } from './redux/store.js';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

import AddStudent from './pages/AddStudent.jsx';
import Settings from './pages/Settings.jsx';
import Students from './pages/Students.jsx';
import LayOut from './pages/LayOut.jsx';
import Dashboard from './components/Dashboard.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<LayOut/>}>
      <Route path='/' element={<Dashboard/>} />
      <Route path='addstudent' element={<AddStudent/>} />
      <Route path='settings' element={<Settings/>} />
      <Route path='student' element={<Students/>} />

    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
