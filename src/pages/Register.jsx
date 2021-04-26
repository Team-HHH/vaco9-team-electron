import React from 'react';
import styled from 'styled-components';
import RegisterForm from '../components/RegisterForm.jsx';
import { register } from '../apis/index.js';
import { color } from '../css/color';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;

export default function Register() {
  async function handleLoginSubmit(data) {
    try {
      const response = await register(data);
      window.location.hash = '#/login';
    } catch (error) {
      window.location.hash = '#/register';
    }
  }

  return (
    <Container>
      <RegisterForm onRegisterSubmit={handleLoginSubmit} />
    </Container>
  );
}
