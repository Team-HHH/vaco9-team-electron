import React from 'react';

export default function AlarmCard({ time, onDeleteButtonClick }) {
  return (
    <div>
      <span>{time}</span>
      <button onClick={onDeleteButtonClick}>x</button>
    </div>
  );
}
