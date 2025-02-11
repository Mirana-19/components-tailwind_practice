/* eslint-disable react/prop-types */

import { Button } from '../../Feedback/Button/Button';
import { Input } from '../Input/Input';
import { useState } from 'react';

export const ContactsForm = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInput = e => {
    if (e.target.name === 'name') {
      setName(e.target.value.trim());
    } else {
      setNumber(e.target.value.trim());
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    onAdd({ name, number });

    setName('');
    setNumber('');
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
        <Input name="name" handler={handleInput} type="text" value={name} required={true} />

        <label htmlFor="name" className="text-[20px]">
          Number
        </label>
        <Input name="number" type="tel" required={true} handler={handleInput} value={number} />

        <Button type={'submit'} name={'Add contact'} />
      </form>
    </div>
  );
};
