/* eslint-disable react/prop-types */
import { Button } from '../Button/Button';

export const FeedbackOptions = ({ handler }) => {
  return (
    <div className="mb-[40px]">
      <h1 className="text-center">Please leave feedback</h1>
      <ul className="flex justify-evenly mt-[20px]">
        <li>
          <Button type={"click"} name="Good" handler={handler} />
        </li>
        <li>
          <Button type={"click"} name="Neutral" handler={handler} />
        </li>
        <li>
          <Button type={"click"} name="Bad" handler={handler} />
        </li>
      </ul>
    </div>
  );
};
