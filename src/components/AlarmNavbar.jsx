import React from 'react';
import AlarmCard from './AlarmCard.jsx';

export default function AlarmNavbar({ alarms, onDeleteButtonClick, onToggleClick }) {
  const handleDeleteButtonClick = (event) => onDeleteButtonClick(event.target.id);
  const handleToggleClick = (event) => onToggleClick(event.target.id);

  const sortedAlarms = alarms.sort((a, b) => {
    const [a1, a2] = a.time.split(':').map(Number);
    const [b1, b2] = b.time.split(':').map(Number);

    return a1 - b1 || a2 - b2;
  });

  return (
    <>
      {sortedAlarms.map(alarm => (
        <AlarmCard
          key={alarm.time}
          time={alarm.time}
          onDeleteButtonClick={handleDeleteButtonClick}
          onToggleClick={handleToggleClick}
        />
      ))}
    </>
  );
}
