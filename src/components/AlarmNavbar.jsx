import React from 'react';
import AlarmCard from './AlarmCard.jsx';

export default function AlarmNavbar({ alarms, onDeleteButtonClick }) {
  const handleDeleteButtonClick = (event) => onDeleteButtonClick(event.target.id);
  console.log('please')
  console.log(alarms.sort((a, b) => a.time - b.time));

  return (
    <>
      {alarms.sort().map(alarm => (
        <AlarmCard
          key={alarm.time}
          time={alarm.time}
          onDeleteButtonClick={handleDeleteButtonClick}
        />
      ))}
    </>
  );
}
