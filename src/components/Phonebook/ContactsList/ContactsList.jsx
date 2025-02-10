/* eslint-disable react/prop-types */

export const ContactsList = ({ contacts }) => {
  return (
    <div className="mt-[50px]">
      <h2 className="text-[26px] font-bold">Contacts</h2>
      <ul className="list-disc flex flex-col flex-wrap">
        {contacts.map(({ name, number, id }) => (
          <li key={id}>
            <p>
              {name}: {number}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
