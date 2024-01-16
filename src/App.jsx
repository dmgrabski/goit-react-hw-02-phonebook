import React, { useState } from "react";
import "./index.css";
import Phonebook from "./components/Phonebook";

const App = () => {
  const [contacts, setContacts] = useState([
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ]);

  const [filter, setFilter] = useState("");

  const handleSubmit = (newContact) => {
    const isContactInTheList = contacts.some(
      (contact) => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (!isContactInTheList) {
      setContacts((prevContacts) => [...prevContacts, newContact]);
    } else {
      alert("Contact with the same name already exists!");
    }
  };

  const handleFilter = (e) => {
    setFilter(e.target.value);
  };

  const handleDelete = (id) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== id)
    );
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <Phonebook  
        contacts={contacts}
        filteredContacts={filteredContacts}
        filter={filter}
        onFilterChange={handleFilter}
        onSubmit={handleSubmit} />

      <ul>
        {filteredContacts.map((contact) => (
          <li key={contact.id}>
            {contact.name}: {contact.number}
            <button onClick={() => handleDelete(contact.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;
