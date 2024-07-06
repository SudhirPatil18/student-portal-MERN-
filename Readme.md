# Teacher Portal

This is a robust teacher portal application built with React.js for the frontend and Node.js for the backend. The portal includes login functionality, student listing, and the ability to manage student details.

## Features

- **Login Functionality:** 
  - API-based login for teachers.
  - Login screen for credential input.
  - Authentication error handling and feedback.
  
- **Teacher Portal Home & Student Listing Screen:** 
  - Redirect to home screen upon successful login.
  - Display list of students with their Name, Subject, and Marks.
  - Options to edit and delete student details.
  - Inline editing of student details.
  
- **New Student Entry:** 
  - Add new student details using a popup/modal.
  - Check for existing student records based on name and subject.
  - Update marks for existing students or create new records.

## Tech Stack

- **Frontend:** React.js, Redux
- **Backend:** Node.js, Express
- **Database:** MongoDB
- **Authentication:** JSON Web Token (JWT)
- **Styling:** Material-UI (optional)

## Installation

### Prerequisites

- Node.js
- npm or yarn
- MongoDB

### Backend Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/SudhirPatil18/student-portal-MERN-.git
   cd teacher-portal
   
*How to run
###Frontend
- cd teacher-portal
- npm install
- npm install react-router-dom react-redux axios redux redux-thunk redux-devtools-extension

### Backend
-	cd backend
-	npm install
-	npm start

