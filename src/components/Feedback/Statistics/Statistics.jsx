/* eslint-disable react/prop-types */
export const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const positivePercentage = Math.round((good / total) * 100);
  return (
    <div>
      <h2>Statistics</h2>
      {total && <ul>
        <li>
          <p>Good: {good}</p>
        </li>
        <li>
          <p>Neutral: {neutral}</p>
        </li>
        <li>
          <p>Bad: {bad}</p>
        </li>
        <li>
          <p>Total: {total} </p>
        </li>
        <li>
          <p>Positive feedback: {positivePercentage}% </p>
        </li>
      </ul>}
    </div>
  );
};
