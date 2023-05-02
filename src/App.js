import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import Facilities from './pages/Facilities';
import Schedule from './pages/Schedule';
import FacilityCalendar from './pages/FacilityCalendar';
import ForgotPassword from './pages/ForgotPassword';
import Calendar from './pages/Calendar';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/facilities/:id" element={<FacilityCalendar />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/calendar" element={<Calendar />} />
      </Routes>
    </div>
  );
}

export default App;
