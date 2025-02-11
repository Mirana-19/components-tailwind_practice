/* eslint-disable react/prop-types */

export const Input = ({ handler, value, name, type, required }) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={handler}
      required={required}
      className="outline-[2px] outline-primary rounded-[4px] hover:outline-secondary focus:outline-secondary"
    />
  );
};
