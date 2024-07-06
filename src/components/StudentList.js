import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateStudent, deleteStudent } from '../redux/actions/studentActions';

const StudentList = ({ students }) => {
  const dispatch = useDispatch();

  const handleEdit = (studentId, updatedDetails) => {
    dispatch(updateStudent(studentId, updatedDetails));
  };

  const handleDelete = (studentId) => {
    dispatch(deleteStudent(studentId));
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Subject</th>
            <th>Marks</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student._id}>
              <td>
                <input
                  type="text"
                  value={student.name}
                  onChange={(e) =>
                    handleEdit(student._id, { ...student, name: e.target.value })
                  }
                />
              </td>
              <td>
                <input
                  type="text"
                  value={student.subject}
                  onChange={(e) =>
                    handleEdit(student._id, { ...student, subject: e.target.value })
                  }
                />
              </td>
              <td>
                <input
                  type="number"
                  value={student.marks}
                  onChange={(e) =>
                    handleEdit(student._id, { ...student, marks: parseInt(e.target.value) })
                  }
                />
              </td>
              <td>
                <button onClick={() => handleDelete(student._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
