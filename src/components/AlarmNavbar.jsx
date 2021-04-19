import React from 'react';
import AlarmCard from './AlarmCard.jsx';

export default function AlarmNavbar({ alarms, onDeleteButtonClick }) {
  const handleDeleteButtonClick = (event) => onDeleteButtonClick(event.target.id);

  return (
    <>
      {alarms.map(alarm => (
        <AlarmCard
          key={alarm.time}
          time={alarm.time}
          onDeleteButtonClick={handleDeleteButtonClick}
        />
      ))}
    </>
  );
}
