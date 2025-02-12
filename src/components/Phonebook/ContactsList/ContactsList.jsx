/* eslint-disable react/prop-types */

import { useState } from 'react';
import { Button } from '../../Feedback/Button/Button';
import { Input } from '../Input/Input';

export const ContactsList = ({ contacts, onDelete }) => {
  const [filter, setFilter] = useState('');

  const handleFilter = e => {
    setFilter(e.target.value.trim());
  };

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="py-[50px] flex flex-col items-start gap-[15px] w-[600px]">
      <h2 className="text-[26px] font-bold">Contacts</h2>

      <label htmlFor="name" className="text-[20px]">
        Find contacts by name
      </label>
      <Input name="filter" type="text" handler={handleFilter} required={false} value={filter} />

      <ul className="list-disc flex flex-col gap-[20px] w-full">
        {filteredContacts.map(({ name, number, id }) => (
          <li className="flex justify-between items-center gap-[20px] grow" key={id}>
            <p className="text-[20px]">
              {name}: {number}
            </p>
            <Button type="button" name="Delete" handler={() => onDelete(id)} />
          </li>
        ))}
      </ul>
    </div>
  );
};
