import React from 'react';

export default function MeetupButton(props) {
  return (
    <div>
      <button className="check-toggle" type="button">Completed</button>
      <button className="delete-button" type="button">Delete</button>
    </div>
  );
}