import React, { useState } from 'react';
import AlarmNavbar from '../components/AlarmNavbar.jsx';
import AlarmRegister from '../components/AlarmRegister.jsx';

import { ipcRenderer } from "electron";

export default function AlarmRegisterPage() {
  const [alarms, setAlarms] = useState([]);

  function handleDeleteButtonClick(time) {
    setAlarms(alarms.filter(alarm => alarm.time !== time));
  }

  function handleRegisterAlarmSubmit(event, time, bodyPart) {
    event.preventDefault();

    if (alarms.some(alarm => alarm.time === time)) {
      return;
    }

    const alarm = { time, bodyPart };

    setAlarms(alarms.concat(alarm).sort());
    ipcRenderer.send('storeAlarm', alarm);
  }

  return (
    <>
      <AlarmNavbar
        alarms={alarms}
        onDeleteButtonClick={handleDeleteButtonClick}
      />
      <AlarmRegister onRegisterAlarmSubmit={handleRegisterAlarmSubmit} />
    </>
  );
}
