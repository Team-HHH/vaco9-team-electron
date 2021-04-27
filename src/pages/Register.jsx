import React from 'react';
import styled from 'styled-components';
import RegisterForm from '../components/RegisterForm.jsx';
import { register } from '../apis/index.js';

const Container = styled.div`
  height: 100vh;
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
