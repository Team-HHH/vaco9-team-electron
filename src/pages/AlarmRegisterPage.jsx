import React, { useState, useEffect } from 'react';
import { ipcRenderer } from 'electron';
import styled from 'styled-components';
import AlarmNavbar from '../components/AlarmNavbar.jsx';
import AlarmRegister from '../components/AlarmRegister.jsx';

const Container = styled.div`
  display: flex;
`;

const LeftSection = styled.div`
  width: 30%;
  background-color: #F5F5F5;
`;

const RightSection = styled.div`
  width: 70%;
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
