import { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';

export const Feedback = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const total = good + bad + neutral;

  const handleStats = ({ target }) => {
    switch (target.name) {
      case 'Good':
        setGood(prevState => prevState + 1);
        break;

      case 'Neutral':
        setNeutral(prevState => prevState + 1);
        break;

      case 'Bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        break;
    }
  };

  return (
    <div className="mx-auto mt-[50px] w-[330px] py-[40px] shadow-2xl rounded-[6px]">
      <FeedbackOptions handler={handleStats} />

      {total === 0 ? (
        <p className=" text-center">No Statisctics</p>
      ) : (
        <Statistics good={good} neutral={neutral} bad={bad} />
      )}
    </div>
  );
};
