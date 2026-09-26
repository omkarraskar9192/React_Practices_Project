import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { StudentCard } from '../components';

function Students() {
  const students = useSelector((state) => state.students.students);
  const dispatch = useDispatch()

  return (
    <>
    <StudentCard students={students}/>
    </>

  )
}

export default Students
