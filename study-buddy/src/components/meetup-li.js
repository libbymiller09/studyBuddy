import React from 'react';

export default function MeetupLi(props) {
  const text = "Node.js, 4pm, Prince Coffee";
  return (
    <li className="meetupLi">
      {text}
    </li>
  );
}