import React, { useEffect } from 'react';
import styled from 'styled-components';
import { ipcRenderer } from 'electron';
import { login } from '../apis/index';

const Container = styled.div`
  display: flex;
`;

export default function Loading({ setUser }) {
  useEffect(() => {
    ipcRenderer.on('loginDataExist', async (event, data) => {
      try {
        const response = await login({
          email: data.account,
          password: data.password,
        });

        setUser(response.data);

        window.location.hash = '#/alarmRegister';
      } catch (error) {
        ipcRenderer.send('deleteUserData', data.account);
      }
    });

    ipcRenderer.on('loginDataDoesNotExist', (event, data) => {
      window.location.hash = '#/login';
    });
  });

  return (
    <Container>
      Loading...
    </Container>
  )
}
