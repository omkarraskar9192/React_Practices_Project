import React from 'react'
import { useSelector } from 'react-redux';


function Students() {

    const students = useSelector((state)=>state.students.students)
  return (
    <div>
        

    </div>
  )
}

export default Students