import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStudents } from '../redux/actions/studentActions';
import StudentList from './StudentList';
import StudentForm from './StudentForm';

const Home = () => {
  const dispatch = useDispatch();
  const students = useSelector((state) => state.students);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchStudents());
  }, [dispatch]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <h1>Student Listing</h1>
      <button onClick={openModal}>Add Student</button>
      {isModalOpen && <StudentForm closeModal={closeModal} />}
      <StudentList students={students} />
    </div>
  );
};

export default Home;
