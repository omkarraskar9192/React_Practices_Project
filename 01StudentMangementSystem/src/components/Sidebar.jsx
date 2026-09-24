import React from 'react'
import {Navigate, Route, Routes} from 'react-router-dom'

function Sidebar() {

  const navItems=[
    {
      name:"Dashboard",
      slug:"dashboard",
    },
    {
      name:"Students",
      slug:"students",}
      ,
      {
        name:"Courses",
        slug:"courses",
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
            <li key={item.name} className='px-4 py-2 hover:bg-gray-700 cursor-pointer'>
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Sidebar