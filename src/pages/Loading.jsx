import React, { useEffect } from 'react';
import styled from 'styled-components';
import { ipcRenderer } from 'electron';
import { useDispatch } from 'react-redux';
import { fetchLogin } from '../reducers/login';

const Container = styled.div`
  display: flex;
`;

export default function Loading({ setUser }) {
  const dispatch = useDispatch();

  useEffect(() => {
    ipcRenderer.on('loginDataExist', async (event, data) => {
      const userData = {
        email: data.account,
        password: data.password,
      };

      dispatch(fetchLogin(userData));
    });

    ipcRenderer.on('loginDataDoesNotExist', (event, data) => {
      window.location.hash = '#/login';
    });
  });

  return (
    <Container>
      Loading...
    </Container>
  );
}
