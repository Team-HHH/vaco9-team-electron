import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { ipcRenderer } from 'electron';
import LoginForm from '../components/LoginForm.jsx';
import { fetchLogin } from '../reducers/login';

const Container = styled.div`
  height: 100vh;
`;

export default function Login() {
  const isError = useSelector((state) => state.loginReducer.isError);
  const errorMessage = useSelector((state) => state.loginReducer.errorMessage);
  const dispatch = useDispatch();

  // async function handleLoginSubmit(data) {
  //   // try {
  //   //   const response = await login(data);

  //   //   window.location.hash = '#/alarmRegister';
  //   //   ipcRenderer.send('storeUserData', data);
  //   // } catch (error) {
  //   //   window.location.hash = '#/login';
  //   // }
  //   dispatch(fetchLogin(data));
  // }

  function handleLoginSubmit(data) {
    dispatch(fetchLogin(data));
  }

  return (
    <Container>
      <LoginForm
        isError={isError}
        errorMessage={errorMessage}
        onLoginSubmit={handleLoginSubmit} />
    </Container>
  );
}
