import React, { useState } from 'react'
import { Navbar, Sidebar } from '../components'
import { useSelector , useDispatch} from 'react-redux';
import Students from './Students';
import AddStudent from './AddStudent';
import { Outlet } from 'react-router-dom';

function LayOut() {



  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex">
        <Sidebar />

      <Outlet/>
      </div>
    </div>
  )
}

export default LayOut
