import React, { useState, useEffect } from 'react';
import { ipcRenderer } from 'electron';
import styled from 'styled-components';
import AlarmNavbar from '../components/AlarmNavbar.jsx';
import AlarmRegister from '../components/AlarmRegister.jsx';
import { color } from '../css/color';

const Container = styled.div`
  display: flex;
`;

const LeftSection = styled.div`
  width: 200px;
  background-color: ${color.MAIN};
`;

const RightSection = styled.div`
  width: 100vw - 200px;
`;

export default function AlarmRegisterPage() {
  const [alarms, setAlarms] = useState([]);

  useEffect(() => {
    ipcRenderer.send('requestAlarms');
    ipcRenderer.on('loadAlarms', (event, data) => {
      setAlarms(data);
    });
  }, []);

  function handleDeleteButtonClick(time) {
    setAlarms(alarms.filter(alarm => alarm.time !== time));

    ipcRenderer.send('deleteAlarm', time);
  }

  function handleToggleClick(time) {
    ipcRenderer.send('toggleAlarm', time);
  }

  function handleRegisterAlarmSubmit(event, time, bodyPart, customVideo) {
    event.preventDefault();

    if (alarms.some(alarm => alarm.time === time)) {
      return;
    }

    const alarm = { time, bodyPart, customVideo };

    setAlarms(alarms.concat(alarm).sort());
    ipcRenderer.send('storeAlarm', alarm);
  }

  return (
    <Container>
      <LeftSection>
        <AlarmNavbar
          alarms={alarms}
          onDeleteButtonClick={handleDeleteButtonClick}
          onToggleClick={handleToggleClick}
        />
      </LeftSection>
      <RightSection>
        <AlarmRegister onRegisterAlarmSubmit={handleRegisterAlarmSubmit} />
      </RightSection>
    </Container>
  );
}
