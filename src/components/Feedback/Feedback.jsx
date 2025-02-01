import { useState } from 'react';
import { Container } from '../Container/Container';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';

export const Feedback = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <Container>
      <FeedbackOptions setGood={setGood} setNeutral={setNeutral} setBad={setBad} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </Container>
  );
};
