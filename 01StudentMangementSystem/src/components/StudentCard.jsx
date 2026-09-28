import { removeStudent} from '../redux/studentSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
function StudentCard({students}) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleStudentRemove = (id)=>{

    const prammition=window.confirm("Are you sure you want to delete this student?")
    prammition ? (dispatch(removeStudent(id))) : null
  }
  return (
    <div>
      <h2 className="text-xl font-bold text-gray-800 mb-4">Students List</h2>

      {students.length === 0 ? (
        <div className="bg-white rounded-xl p-8 text-center border border-gray-200 shadow-sm text-gray-500 text-sm">
          No students found.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {students.map((student) => (
            <div
              key={student.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-md border border-gray-200 p-5 flex flex-col justify-between transition duration-200"
            >
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-gray-900">{student.name}</h3>
                  <span className="text-xs font-medium px-2.5 py-1 bg-indigo-50 text-indigo-700 rounded-full border border-indigo-100">
                    {student.course}
                  </span>
                </div>
                <p className="text-sm text-gray-500 mb-4">{student.email}</p>

                <div className="grid grid-cols-2 gap-2 pt-3 border-t border-gray-100 text-sm">
                  <div className="bg-gray-50 p-2 rounded-lg">
                    <span className="text-gray-400 text-xs font-medium block">Marks</span>
                    <span className="font-semibold text-gray-700">{student.marks}%</span>
                  </div>
                  <div className="bg-gray-50 p-2 rounded-lg">
                    <span className="text-gray-400 text-xs font-medium block">Attendance</span>
                    <span className="font-semibold text-gray-700">{student.attendance}%</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-gray-100 flex justify-end gap-2">
                <button
                  onClick={() => navigate(`/edit-student/${student.id}`)}
                  className="px-3 py-1.5 bg-indigo-50 text-indigo-600 hover:bg-indigo-100 rounded-md text-xs font-semibold transition"
                >
                  Update
                </button>
                <button
                  onClick={() => handleStudentRemove(student.id) }
                  className="px-3 py-1.5 bg-red-50 text-red-600 hover:bg-red-100 rounded-md text-xs font-semibold transition"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default StudentCard