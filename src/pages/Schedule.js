import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/Schedule.css';

function Schedule() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://api.example.com/users')
      .then(res => {
        setUsers(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }, []);

  return (
    <div className="schedule-container">
      <h1>Schedule</h1>
      <div className="users-container">
        {users.map(user => (
          <div key={user.id} className="user-card">
            <h2>{user.name}</h2>
            <Link to={`/calendar/${user.id}`} className="view-calendar-btn">View Calendar</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Schedule;
