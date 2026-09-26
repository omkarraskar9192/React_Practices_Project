import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeStudent, updateStudent } from '../redux/studentSlice';

function Students() {
  const students = useSelector((state) => state.students.students);
  const dispatch = useDispatch()

  return (
    <div className="p-4">
      <label className="block text-xl font-bold text-gray-800 mb-4">
        Students List
      </label>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {students.map((student) => (
          <div key={student.id}>
          <div  className="p-4 bg-white rounded-lg shadow border border-gray-200">
            <h1 className="text-lg font-semibold text-gray-900">{student.name}</h1>
            <h1 className="text-sm text-gray-600">{student.email}</h1>
            <h1 className="text-sm text-indigo-600 font-medium mt-1">{student.course}</h1>
            <h1 className="text-sm text-gray-700 mt-2">Marks: {student.marks}</h1>
            <h1 className="text-sm text-gray-700">Attendance: {student.attendance}</h1>
          </div>
          <div>
            <button onClick={()=>dispatch(updateStudent(student))}>Update</button>
            <button onClick={()=>dispatch(removeStudent(student.id))}>Delete </button>
          </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Students
