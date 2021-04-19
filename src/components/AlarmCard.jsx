import React from 'react';

export default function AlarmCard({ time, onDeleteButtonClick }) {
  return (
    <>
      <span>{time}</span>
      <button
        id={time}
        onClick={onDeleteButtonClick}
      >x</button>
    </>
  );
}
