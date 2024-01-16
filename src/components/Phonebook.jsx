import React, { useState } from "react";
import Section from "./Section";
import ContactForm from "./ContactForm";
import Contacts from "./ContactList";
import Filter from "./Filter";

const Phonebook = ({filter,filteredContacts, onFilterChange,onSubmit}) => {
 

 
  return (
    <>
      <Section title="Phonebook">
        <ContactForm onSubmit={onSubmit} />
      </Section>
      <Section title="Contacts">
        <Filter filter={filter} setFilter={onFilterChange} />
        <Contacts contacts={filteredContacts} />
      </Section>
    </>
  );
};

export default Phonebook;