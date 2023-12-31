import React, { useState, useEffect } from "react";
import { ContactPicker } from "../contactPicker/ContactPicker"

const getTodayString = () => {
  const [month, day, year] = new Date().toLocaleDateString("en-US").split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

const getCurrentTimeString = () => {
  const now = new Date();
  return `${now.getHours().toString().padStart(2, "0")}:${now.getMinutes().toString().padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit,
}) => {


  const [defaultDate] = useState(getTodayString());
  const [defaultTime] = useState(getCurrentTimeString());

  useEffect(() => {

    if (!date) {
      setDate(defaultDate);
    }

    if (!time) {
      setTime(defaultTime);
    }
  }, [date, time, setDate, setTime]);

  return (
    <form onSubmit={handleSubmit} aria-label="Appointment Form">
      <label>
        Title:
        <input
          type="text"
          value={title.toUpperCase()}
          onChange={(e) => setTitle(e.target.value)}
          required
          aria-label="Title"
        />
      </label>

      <label>
        Date:
        <input
          type="date"
          value={date || defaultDate}
          min={getTodayString()}
          onChange={(e) => setDate(e.target.value)}
          required
          aria-label="Date"
        />
      </label>

      <label>
        Time:
        <input
          type="time"
          value={time || defaultTime}
          onChange={(e) => setTime(e.target.value)}
          required
          aria-label="Time"
        />
      </label>

      <label>
        Contact:
        <ContactPicker
          contacts={contacts}
          selectedContact={contact}
          onChange={(selectedContact) => setContact(selectedContact)}
          aria-label="Contact Picker"
        />
      </label>

      <button type="submit" aria-label="Submit">
        Submit
      </button>
    </form>
  );
};