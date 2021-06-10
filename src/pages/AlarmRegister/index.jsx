import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ipcRenderer } from 'electron';

import AlarmNavbar from '../../components/AlarmNavbar/index.jsx';
import AlarmRegisterForm from '../../components/AlarmRegisterForm/index.jsx';
import { AlarmRegister as S } from './styles';

export default function AlarmRegister() {
  const [alarms, setAlarms] = useState([]);
  const token = useSelector((state) => state.loginReducer.accessToken);

  useEffect(() => {
    ipcRenderer.send('requestAlarms');
    ipcRenderer.on('loadAlarms', (event, data) => {
      setAlarms(data);
    });

    ipcRenderer.send('requestPrepareAlarms', token);
  }, []);

  function handleDeleteButtonClick(time) {
    setAlarms(alarms.filter(alarm => alarm.time !== time));
    ipcRenderer.send('deleteAlarm', time);
  }

  function handleToggleClick(time) {
    ipcRenderer.send('toggleAlarm', time);
  }

  function handleRegisterAlarmSubmit(data) {
    const { time, bodyPart, customVideo } = data;

    if (alarms.some(alarm => alarm.time === time)) {
      return;
    }

    const alarm = { time, bodyPart, customVideo };

    setAlarms(alarms.concat(alarm));
    ipcRenderer.send('storeAlarm', token, alarm);
  }

  return (
    <S.Container>
      <S.LeftSection>
        <AlarmNavbar
          alarms={alarms}
          onToggleClick={handleToggleClick}
          onDeleteButtonClick={handleDeleteButtonClick}
        />
      </S.LeftSection>
      <S.RightSection>
        <AlarmRegisterForm onRegisterAlarmSubmit={handleRegisterAlarmSubmit} />
      </S.RightSection>
    </S.Container>
  );
}
