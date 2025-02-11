/* eslint-disable react/prop-types */

import { Button } from '../../Feedback/Button/Button';
import { Input } from '../Input/Input';

export const ContactsList = ({ contacts, filter, setFilter, onDelete }) => {
  const handleFilter = e => {
    setFilter(e.target.value.trim());
  };

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="mt-[50px] flex flex-col items-start gap-[15px]">
      <h2 className="text-[26px] font-bold">Contacts</h2>

      <label htmlFor="name" className="text-[20px]">
        Find contacts by name
      </label>
      <Input name="filter" type="text" handler={handleFilter} required={false} value={filter} />

      <ul className="list-disc flex flex-col flex-wrap">
        {filteredContacts.map(({ name, number, id }) => (
          <li className="flex " key={id}>
            <p>
              {name}: {number}
            </p>
            <Button type="button" name="Delete" handler={() => onDelete(id)} />
          </li>
        ))}
      </ul>
    </div>
  );
};
