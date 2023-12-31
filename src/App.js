import React, { useState } from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom"
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  
  const [contacts, setContacts] = useState([]);
  const [appointments, setAppointments] = useState([]);

  const addContact = (newContact) => {
    setContacts(prevContacts => {
      const updatedContacts = [...prevContacts, newContact];
      return updatedContacts;
    });
  };
  

  const addAppointment = (newAppointment) => {
    setAppointments(prevAppointments => {
      const updatedAppointments = [...prevAppointments, newAppointment];
      return updatedAppointments;
    });   
  };

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root/> }>
      <Route index element={ <Navigate to={ROUTES.CONTACTS} replace/> }/>
      <Route path={ROUTES.CONTACTS} element={ <ContactsPage 
              contacts={contacts} 
              addContact={addContact}
            />   }/>
      <Route path={ROUTES.APPOINTMENTS} element={ <AppointmentsPage
              appointments={appointments}
              contacts={contacts}
              addAppointment={addAppointment}
            />  }/>
    </Route>
  ));
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
