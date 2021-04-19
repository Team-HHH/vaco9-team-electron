import React from 'react';
import AlarmCard from './AlarmCard.jsx';

export default function AlarmNavbar({ alarms, onDeleteButtonClick }) {
  return (
    <div>
      {alarms.map(alarm => (
        <AlarmCard
          key={alarm}
          time={alarm}
          onDeleteButtonClick={onDeleteButtonClick}
        />
      ))}
    </div>
  );
}
