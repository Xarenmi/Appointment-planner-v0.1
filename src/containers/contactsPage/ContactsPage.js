import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({ contacts, addContact }) => {
  // Define state variables for contact info and duplicate check
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [isDuplicate, setIsDuplicate] = useState(false);

  // Check for duplicates whenever the name in the form changes
  useEffect(() => {
    setIsDuplicate(
    contacts.some(
      (contact) =>
        contact.name === name ||
        contact.phone === phone ||
        contact.email === email
    )
  );
}, [name, phone, email, contacts]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check for duplicate name before adding a new contact
    if (!isDuplicate) {
      // Add contact info and clear data
      addContact({ name, description: `${phone} - ${email}` });
      setName("");
      setPhone("");
      setEmail("");
    }
  };

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          name={name}
          setName={setName}
          phone={phone}
          setPhone={setPhone}
          email={email}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
          isDuplicate={isDuplicate}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList data={contacts} />
      </section>
    </div>
  );
};
