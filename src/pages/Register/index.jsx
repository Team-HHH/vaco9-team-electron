import React, { useState } from 'react';
import RegisterForm from '../../components/RegisterForm/index.jsx';
import { register } from '../../apis/index.js';
import { Register as S } from './styles';

export default function Register() {
  const [isFetching, setIsFetching] = useState(false);

  async function handleRegisterSubmit(data) {
    setIsFetching(true);
    try {
      const response = await register(data);
      window.location.hash = '#/login';
    } catch (error) {
      setIsFetching(false);
      window.location.hash = '#/register';
    }
  }

  return (
    <S.Container>
      <RegisterForm
        isFetching={isFetching}
        onRegisterSubmit={handleRegisterSubmit} />
    </S.Container>
  );
}
