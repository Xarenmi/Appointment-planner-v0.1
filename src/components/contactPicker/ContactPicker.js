import React from "react";

export const ContactPicker = ({ contacts, onChange, value, name }) => (
  <select onChange={(e) => { onChange(e.target.value); }} value={value} name={name}>
    <option value="">No Contact Selected</option>
    {contacts.map((contact) => (
      <option key={contact.name} value={contact.name}>
        {contact.name}
      </option>
    ))}
  </select>
);

