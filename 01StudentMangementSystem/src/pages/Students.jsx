import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { StudentCard } from '../components';

function Students() {
  const students = useSelector((state) => state.students.students);
  const dispatch = useDispatch()
  const [search,setSearch]  = useState('')
  const filterStudents = students.filter((student)=>student.name.toLowerCase().includes(search.toLowerCase()) ||student.email.toLowerCase().includes(search.toLowerCase()) || student.course.toLowerCase().includes(search.toLowerCase()) )

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-200">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Students Directory</h1>
          <p className="text-sm text-gray-500">Search and manage registered students</p>
        </div>
        <div className="relative w-full sm:w-72">
          <input
            type="text"
            placeholder="Search student by name, email, or course..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none transition shadow-sm"
          />
        </div>
      </div>

      <StudentCard students={filterStudents} />
    </div>
  )
}

export default Students
