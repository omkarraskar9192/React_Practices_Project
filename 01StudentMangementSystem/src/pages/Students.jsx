import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { StudentCard } from '../components';

function Students() {
  const students = useSelector((state) => state.students.students);
  const dispatch = useDispatch()
  const [search,setSearch]  = useState('')
  const filterStudents = students.filter((student)=>student.name.toLowerCase().includes(search.toLowerCase()) ||student.email.toLowerCase().includes(search.toLowerCase()) || student.course.toLowerCase().includes(search.toLowerCase()) )

  return (
    <>
    <input value={search} onChange={(e)=>(setSearch(e.target.value))}/>

    <StudentCard students={filterStudents}/>
    </>

  )
}

export default Students
