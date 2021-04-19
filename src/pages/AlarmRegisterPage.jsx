import React, { useState } from 'react';
import AlarmNavbar from '../components/AlarmNavbar.jsx';
import AlarmRegister from '../components/AlarmRegister.jsx';

import { ipcRenderer } from "electron";

export default function AlarmRegisterPage() {
  const [alarms, setAlarms] = useState([]);

  function handleDeleteButtonClick() {

  }

  function handleRegisterAlarmSubmit(event, time, bodyPart) {
    event.preventDefault();
    const alarm = { time, bodyPart };

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
