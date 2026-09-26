import React from 'react'
import {Link, Navigate, NavLink, Route, Routes} from 'react-router-dom'

function Sidebar() {

  
  const navItems=[
    {
      name:"Dashboard",
      slug:"/",
    },
    {
      name:"Add Student",
      slug:"addstudent",}
      ,
      {
        name:"Student",
        slug:"student",
      },{
        name:"Settings",
        slug:"settings",
      }
  ]
  return (
    <div>
      <div className='bg-gray-800 text-white w-64 min-h-screen'>
        <h1 className='text-2xl font-bold p-4'>Student Management</h1>
        <ul>
          {navItems.map((item)=>(
          <NavLink key={item.name} to={item.slug}>
            <li  className='px-4 py-2 hover:bg-gray-700 cursor-pointer' >
              {item.name}
              
            </li>
          </NavLink>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Sidebar