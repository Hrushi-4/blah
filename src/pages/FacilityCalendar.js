import React, { useState } from "react";
import "../styles/FacilityCalendar.css";

const FacilityCalendar = ({ facilityName }) => {
  const [calendarView, setCalendarView] = useState("month");
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedHour, setSelectedHour] = useState(null);

  const handleDayClick = (date) => {
    setSelectedDate(date);
    setCalendarView("day");
  };

  const handleHourClick = (hour) => {
    setSelectedHour(hour);
    // call backend function to mark hour as available/busy
  };

  const renderCalendar = () => {
    if (calendarView === "month") {
      return (
        <div className="calendar-container">
          <div className="calendar-header">{facilityName}</div>
          <div className="calendar-month-view">
            <div className="month-grid">
              {/* replace with actual month grid */}
              <div className="month-cell">Jan</div>
              <div className="month-cell">Feb</div>
              <div className="month-cell">Mar</div>
              <div className="month-cell">Apr</div>
              <div className="month-cell">May</div>
              <div className="month-cell">Jun</div>
              <div className="month-cell">Jul</div>
              <div className="month-cell">Aug</div>
              <div className="month-cell">Sep</div>
              <div className="month-cell">Oct</div>
              <div className="month-cell">Nov</div>
              <div className="month-cell">Dec</div>
            </div>
          </div>
        </div>
      );
    } else if (calendarView === "day") {
      return (
        <div className="calendar-container">
          <div className="calendar-header">{facilityName}</div>
          <div className="calendar-day-view">
            <div className="day-grid">
              {/* replace with actual day grid */}
              {[...Array(24)].map((_, i) => (
                <div
                  key={i}
                  className={`hour-cell ${i === selectedHour ? "selected" : ""}`}
                  onClick={() => handleHourClick(i)}
                >
                  {i}:00
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }
  };

  return renderCalendar();
};

export default FacilityCalendar;
