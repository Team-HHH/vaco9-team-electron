import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { color } from '../css/color';

const LoginWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-color: ${color.WHITE};
`;

const FormWrapper = styled.div`
  height: 60vh;
`;

const Label = styled.label`
  color: ${color.BOLD};
  margin: 3px;
`;

const Input = styled.input`
  display: block;
	border: none;
	padding: 8px 15px;
	margin: 0 0 20px 0;
	width: 80%;
  border-radius: 8px;
  background-color: ${color.LIGHT};
`;

const Button = styled.input`
  margin: 20px 0;
  border: none;
  border-radius: 18px;
  padding: 10px 15px;
  width: 40%;
  background-color: ${color.SUB};
  &:hover {
    background-color: ${color.MAIN};
    color: black;
  }
  &:focus {
    outline: none;
  }
`;

export default function Login({ onLoginSubmit }) {
  const {
    register,
    handleSubmit,
  } = useForm();
  return (
    <LoginWrapper>
      <FormWrapper>
        <h1>로그인</h1>
        <form onSubmit={handleSubmit(onLoginSubmit)}>
          <Label>이메일 주소</Label>
          <Input
            type="email"
            name="email"
            {...register('email')}
          />
          <Label>패스워드</Label>
          <Input
            type="password"
            name="password"
            {...register('password')}
          />
          <Button
            type="submit"
            value="로그인"
          />
        </form>
        <div>
          <span>아직 계정이 없으신가요?</span>
          <Link to="/register">회원가입</Link>
        </div>
      </FormWrapper>
    </LoginWrapper>
  );
}
