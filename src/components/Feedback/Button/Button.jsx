/* eslint-disable react/prop-types */

export const Button = ({ name, handler }) => {
  return (
    <button
      className="px-[20px] py-[5px] cursor-pointer rounded-[4px] bg-primary hover:bg-secondary transition-colors duration-300"
      type="button"
      onClick={() => handler(prevState => prevState + 1)}
    >
      {name}
    </button>
  );
};
