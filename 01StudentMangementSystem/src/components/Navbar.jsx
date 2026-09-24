import React from 'react'



function Navbar() {
  return (
    <div className="flex items-center justify-between px-6 py-3 bg-white border-b border-gray-200 shadow-sm">
      <h1 className="text-xl font-bold text-gray-800">Student Management System</h1>
      <nav>
        <ul className="flex items-center gap-2">
            <li>
              <button
                type="button"
                className="px-4 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-blue-500 hover:text-white transition-colors"
              >
                Notification 
              </button>
            </li>
            <li>
              <button
                type="button"
                className="px-4 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-blue-500 hover:text-white transition-colors"
              >
                Profile
              </button>
            </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
