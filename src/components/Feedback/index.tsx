import React from 'react';
import {
  FeedbackLink,
  Platform,
  Wrap,
  Heading,
  Count,
  Rating,
  Message,
  Date,
  Total,
  Hours,
  Type,
  Info,
} from './styled';
import upwork from '../Social/img/upwork.png';

interface Feedback {
  heading: string;
  date: string;
  total: string;
  hours?: string;
  type: string;
  message: string;
}

const Star = ()=> (
  <svg height="11px" viewBox="0 -10 511.99143 511" width="11px" xmlns="http://www.w3.org/2000/svg"><path fill='#37A000' d="m510.652344 185.882812c-3.371094-10.367187-12.566406-17.707031-23.402344-18.6875l-147.796875-13.417968-58.410156-136.75c-4.3125-10.046875-14.125-16.53125-25.046875-16.53125s-20.738282 6.484375-25.023438 16.53125l-58.410156 136.75-147.820312 13.417968c-10.835938 1-20.011719 8.339844-23.402344 18.6875-3.371094 10.367188-.257813 21.738282 7.9375 28.925782l111.722656 97.964844-32.941406 145.085937c-2.410156 10.667969 1.730468 21.699219 10.582031 28.097656 4.757813 3.457031 10.347656 5.183594 15.957031 5.183594 4.820313 0 9.644532-1.28125 13.953125-3.859375l127.445313-76.203125 127.421875 76.203125c9.347656 5.585938 21.101562 5.074219 29.933593-1.324219 8.851563-6.398437 12.992188-17.429687 10.582032-28.097656l-32.941406-145.085937 111.722656-97.964844c8.191406-7.1875 11.308594-18.535156 7.9375-28.925782zm-252.203125 223.722657"/></svg>
);

const Feedback: React.FC<Feedback> = (
  {
    heading,
    date,
    total,
    hours,
    type,
    message,
  }
) => {

  return (
    <FeedbackLink href='https://www.upwork.com/o/profiles/users/~0192f5835e541f3b30/' target="_blank" rel="noopener noreferrer">
      <Info>
        <Wrap>
          <Heading>{heading}</Heading>
          <Rating>
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
            <Count>
              5.0
            </Count>
            <Date>{date}</Date>
          </Rating>
        </Wrap>
        <Wrap reverse>
          <Total>{total}</Total>
          {
            hours ? <Hours>{hours}</Hours> : null
          }
          <Type>{type}</Type>
        </Wrap>
      </Info>

      <Message>{message}</Message>
      <Platform src={upwork} />
    </FeedbackLink>
  )
};

export default Feedback;
