/* eslint-disable react/prop-types */



export const Button = ({ type, name, handler }) => {
  console.log(handler, '<<<<');
  
  return (
    <button
      className="inline-block px-[20px] py-[5px] cursor-pointer rounded-[4px] bg-primary hover:bg-secondary transition-colors duration-300"
      type={type}
      name={name}
      onClick={handler}
    >
      {name}
    </button>
  );
};
