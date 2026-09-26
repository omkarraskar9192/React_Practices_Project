import { useState } from 'react'

import './App.css'
import Dashboard from './pages/LayOut';
import { BrowserRouter, Outlet } from 'react-router-dom';
import { Navbar } from './components';

function App() {

  return (
    <>

      <Outlet/>

    </>
  )
}

export default App
