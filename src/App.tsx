import React from "react";
import "./App.css";
import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Home from "./views/Home";
import StudentPage from "./views/StudentPage";
import TeacherPage from "./views/TeacherPage";
import FinancePage from "./views/FinancePage";
import MealPage from "./views/MealPage";
import TeacherDetail from "./views/Teacher/TeacherDetail";
import StudentDetailPage from "./views/Student/StudentDetailPage";
import UserPage from "./views/UserPage";
import MealDetail from "./views/Meal/MealDetail";
import AddStudent from "./views/Student/AddStudent";
import AddTeacher from "./views/Teacher/AddTeacher";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/students" element={<StudentPage />} />
        <Route path="/addstudents" element={<AddStudent />} />
        <Route path="/students/:name" element={<StudentDetailPage />} />
        <Route path="/teachers" element={<TeacherPage />} />
        <Route path="/addteachers" element={<AddTeacher />} />
        <Route path="/teachers/:name" element={<TeacherDetail />} />
        <Route path="/finance" element={<FinancePage />} />
        <Route path="/meals" element={<MealPage />} />
        <Route path="/meals/:name" element={<MealDetail />} />
        <Route path="/users" element={<UserPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
