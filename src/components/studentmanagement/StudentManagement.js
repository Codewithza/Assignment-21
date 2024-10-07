import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addStudent, deleteStudent, updateStudent } from '../../features/student/studentSlice';
import StudentForm from '../../components/studentform/StudentForm';
import { v4 as uuidv4 } from 'uuid';

const StudentManagement = () => {
  const students = useSelector((state) => state.students.students);
  const dispatch = useDispatch();
  const [selectedStudent, setSelectedStudent] = useState(null);

  const handleAddStudent = (student) => {
    student.id = uuidv4();
    dispatch(addStudent(student));
  };

  const handleDeleteStudent = (id) => {
    dispatch(deleteStudent(id));
  };

  const handleUpdateStudent = (student) => {
    dispatch(updateStudent({ id: student.id, updatedData: student }));
    setSelectedStudent(null);
  };

  return (
    <div className="student-management">
      <h1>Student Management</h1>

      <div className="form-section">
        <h2>{selectedStudent ? "Update Student" : "Add Student"}</h2>
        <StudentForm
          onSubmit={selectedStudent ? handleUpdateStudent : handleAddStudent}
          initialValues={selectedStudent}
        />
      </div>

      <h2>Student List</h2>
      <ul>
        {students.map((student) => (
          <li key={student.id} className="student-item">
            {student.name} - {student.rollno} - {student.email}
            <div className="actions">
              <button onClick={() => handleDeleteStudent(student.id)}>Delete</button>
              <button onClick={() => setSelectedStudent(student)}>Update</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentManagement;
