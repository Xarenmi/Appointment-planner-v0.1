import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
  isDuplicate
}) => {
  return (
    <form onSubmit={handleSubmit} aria-label="Contact Form">
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          aria-label="Name"
        />
      </label>
      {isDuplicate && (
        <p style={{ color: "red" }} aria-live="assertive">
          Duplicate name! Choose a different name.
        </p>
      )}

      <label>
        Phone:
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          placeholder="Format: 123-456-7890"
          required
          aria-label="Phone"
        />
      </label>

      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          aria-label="Email"
        />
      </label>

      <button type="submit" aria-label="Submit">
        Add Contact
      </button>
    </form>
  );
};


