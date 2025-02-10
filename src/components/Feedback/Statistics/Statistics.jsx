/* eslint-disable react/prop-types */
export const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const positivePercentage = Math.round((good / total) * 100);
  return (
    <div className="px-[30px]">
      <h2>Statistics :</h2>
      <ul className="flex flex-col gap-[10px] mt-[10px]">
        <li>
          <p>Good : {good}</p>
        </li>
        <li>
          <p>Neutral : {neutral}</p>
        </li>
        <li>
          <p>Bad : {bad}</p>
        </li>
        <li>
          <p>Total : {total} </p>
        </li>
        <li>
          <p>Positive feedback : {positivePercentage}% </p>
        </li>
      </ul>
    </div>
  );
};
