import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';

import { ContactsForm } from './ContactsForm/ContactsForm';
import { ContactsList } from './ContactsList/ContactsList';

export const Phonebook = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const storedContacts = localStorage.getItem('contacts');

    if (storedContacts) {
      setContacts(JSON.parse(storedContacts));
    }
  }, []);

  useEffect(() => {
    const contactsFromLS = localStorage.getItem('contacts');

    if (contactsFromLS !== JSON.stringify(contacts)) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }, [contacts]);

  const handleAddContact = ( name, number ) => {
    const checkDuplicates = contacts.some(
      ({ name: contactName }) => name.toLowerCase() === contactName.toLowerCase()
    );

    if (checkDuplicates) {
      return alert(`Name "${name}" already exists!`);
    }

    setContacts(prevState => [...prevState, { id: nanoid(), name, number }]);
  };

  const handleDeleteContact = id => {
    const filteredContacts = contacts.filter(c => c.id !== id);

    setContacts(filteredContacts);
  };

  return (
    <div className="w-[600px] mt-[50px] mx-auto">
      <ContactsForm onAdd={handleAddContact} />
      <ContactsList contacts={contacts} onDelete={handleDeleteContact} />
    </div>
  );
};
