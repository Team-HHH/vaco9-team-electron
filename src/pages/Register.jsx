import React from 'react';
import styled from 'styled-components';
import RegisterForm from '../components/RegisterForm.jsx';
import { register } from '../apis/index.js';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;

const FormWrapper = styled.div`
  display: flex;
  width: 30%;
  height: 100%;
`;

const ImageWrapper = styled.div`
  display: flex;
  width: 70%;
  height: 100%;
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
      <FormWrapper>
        <RegisterForm onRegisterSubmit={handleLoginSubmit}/>
      </FormWrapper>
      <ImageWrapper></ImageWrapper>
    </Container>
  );
}
