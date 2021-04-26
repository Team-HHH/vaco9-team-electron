import React from 'react';
import styled from 'styled-components';
import { ipcRenderer } from 'electron';
import LoginForm from '../components/LoginForm.jsx';
import { login } from '../apis/index.js';
import { color } from '../css/color';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: ${color.SUB}
`;

const FormWrapper = styled.div`
  display: flex;
  width: 40%;
  height: 100%;
`;

const ImageWrapper = styled.div`
  display: flex;
  width: 60%;
  height: 100%;
`;

const Img = styled.img`
  background-color: yellow;
`;

export default function Login() {
  async function handleLoginSubmit(data) {
    try {
      const response = await login(data);
      window.location.hash = '#/alarmRegister';
      ipcRenderer.send('storeUserData', data);
    } catch (error) {
      window.location.hash = '#/login';
    }
  }

  return (
    <Container>
      <FormWrapper>
        <LoginForm onLoginSubmit={handleLoginSubmit} />
      </FormWrapper>
      <ImageWrapper>
        <Img src="" alt="" />
      </ImageWrapper>
    </Container>
  );
}
