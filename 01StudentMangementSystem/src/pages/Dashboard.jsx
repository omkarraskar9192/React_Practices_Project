import React, { useState } from 'react'
import { Navbar, Sidebar } from '../components'

function Dashboard() {
  const [students, setStudents] = useState(0)
  const [marks, setMarks] = useState(0)

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex">
        <Sidebar />

        {/* Main Content Area */}
        <main className="flex-1 p-6 space-y-6">
          <h2 className="text-2xl font-bold text-gray-800">Dashboard</h2>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
              <p className="text-sm font-medium text-gray-500">Students</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">{students}</p>
            </div>

            <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
              <p className="text-sm font-medium text-gray-500">Marks</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">{marks}</p>
            </div>
          </div>

          {/* Recent Students Section */}
          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Recent Students</h3>
            <p className="text-sm text-gray-500">No students added yet.</p>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Dashboard
