/* eslint-disable react/prop-types */
import { Button } from '../Button/Button';

export const FeedbackOptions = ({ setGood, setNeutral, setBad }) => {
  return (
    <div className="mx-auto w-[300px]">
      <h1>Please leave feedback</h1>
      <ul className="flex justify-around">
        <li>
          <Button name="Good" handler={setGood} />
        </li>
        <li>
          <Button name="Neutral" handler={setNeutral}/>
        </li>
        <li>
          <Button name="Bad"  handler={setBad}/>
        </li>
      </ul>
    </div>
  );
};
