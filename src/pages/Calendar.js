import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import '../styles/Calendar.css';

const localizer = momentLocalizer(moment);

const CalendarPage = () => {
  const [events, setEvents] = useState([]);

  const handleSelect = ({ start, end }) => {
    const title = window.prompt('New Event name');
    if (title) {
      const newEvent = {
        start,
        end,
        title,
      };
      setEvents([...events, newEvent]);
    }
  };

  return (
    <div className="calendar-container">
      <h1>Calendar Page</h1>
      <Calendar
        selectable
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        onSelectSlot={handleSelect}
      />
    </div>
  );
};

export default CalendarPage;
