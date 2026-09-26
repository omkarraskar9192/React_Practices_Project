import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';


function Dashboard() {
    const [marks, setMarks] = useState(0)
    const dispatch = useDispatch();
    const studentsList = useSelector((state) => state.students.students);
  return (
    <div>        {/* Main Content Area */}
        <main className="flex-1 p-6 space-y-6">
          <h2 className="text-2xl font-bold text-gray-800">Dashboard</h2>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
              <p className="text-sm font-medium text-gray-500">Students</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">{studentsList.length}</p>
              <button
                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                onClick={() => dispatch({ type: 'students/addStudent', payload: { name: 'New Student' } })}
              >
                Add Student
              </button>
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
        </main></div>
  )
}

export default Dashboard