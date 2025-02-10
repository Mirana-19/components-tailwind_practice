/* eslint-disable react/prop-types */

import { nanoid } from 'nanoid';
import { Button } from '../../Feedback/Button/Button';

export const ContactsForm = ({ setContacts, name, setName, number, setNumber }) => {
  const handleInput = e => {
    if (e.target.name === 'name') {
      setName(e.target.value.trim());
    } else {
      setNumber(e.target.value.trim());
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    setContacts(prevState => [...prevState, {id: nanoid(), name, number }]);
    setName('');
  };

  return (
    <div>
      <h1 className="text-[26px] font-bold">Phonebook</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-start gap-[15px] py-[40px] px-[25px] mt-[20px] border-[2px] rounded-[6px]"
      >
        <label htmlFor="name" className="text-[20px]">
          Name
        </label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleInput}
          required
          className="outline-[2px] outline-primary rounded-[4px] hover:outline-secondary focus:outline-secondary"
        />
        <label htmlFor="name" className="text-[20px]">
          Number
        </label>
        <input
          type="tel"
          name="number"
          onChange={handleInput}
          required
          className="outline-[2px] outline-primary rounded-[4px] hover:outline-secondary focus:outline-secondary"
        />

        <Button type={'submit'} name={'Add contact'} />
      </form>
    </div>
  );
};
