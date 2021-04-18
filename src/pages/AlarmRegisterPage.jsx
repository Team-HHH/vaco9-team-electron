import React from 'react';
import AlarmRegister from '../components/AlarmRegister.jsx';

import { ipcRenderer } from "electron";

export default function AlarmRegisterPage() {
  function handleRegisterAlarmSubmit(e, time, bodyPart) {
    e.preventDefault();
    const alarm = { time, bodyPart };

    ipcRenderer.send('storeAlarm', alarm);
  }

  return (
    <AlarmRegister
      onRegisterAlarmSubmit={handleRegisterAlarmSubmit}
    />
  );
}
