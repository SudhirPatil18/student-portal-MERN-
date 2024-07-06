// StudentForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addOrUpdateStudent } from '../redux/actions/studentActions';

const StudentForm = ({ closeModal }) => {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [marks, setMarks] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addOrUpdateStudent({ name, subject, marks: parseInt(marks) }));
    closeModal();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} required />
      <input type="number" value={marks} onChange={(e) => setMarks(e.target.value)} required />
      <button type="submit">Add/Update Student</button>
    </form>
  );
};

export default StudentForm;
