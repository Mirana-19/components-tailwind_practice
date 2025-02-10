import { useEffect, useState } from 'react';
import { ContactsForm } from './ContactsForm/ContactsForm';
import { ContactsList } from './ContactsList/ContactsList';

export const Phonebook = () => {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  useEffect(() => {
    const storedContacts = localStorage.getItem('contacts');

    if (storedContacts) {
      setContacts(JSON.parse(storedContacts));
    }
  }, []);

  useEffect(() => {
    const storedContacts = localStorage.getItem('contacts');

    if (storedContacts !== JSON.stringify(contacts)) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }, [contacts]);

  return (
    <div className="w-[600px] mt-[50px] mx-auto">
      <ContactsForm
        setContacts={setContacts}
        name={name}
        setName={setName}
        number={number}
        setNumber={setNumber}
      />
      <ContactsList contacts={contacts} />
    </div>
  );
};
