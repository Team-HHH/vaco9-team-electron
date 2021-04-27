import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { color } from '../css/color';

const LoginWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-color: ${color.SUB};
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 420px;
  width: 400px;
  background-color: ${color.WHITE};
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;

const AuthHeaderWrapper = styled.div`
  display: flex;
  position: relative;
  top: -40px;
  width: 40%;
  justify-content: space-between;
`;

const LinkWrapper = styled.div`
  opacity: 0.3;
  &:hover {
    opacity: 1;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
`;

const Label = styled.label`
  color: ${color.BOLD};
  margin: 3px;
`;

const Input = styled.input`
  display: block;
	border: none;
	padding: 10px 8px;
	margin: 0 0 10px 0;
	width: 240px;
  border-radius: 3px;
  background-color: ${color.LIGHT};
`;

const Button = styled.input`
  position: relative;
  bottom: -58px;
  margin: 20px 0;
  border: none;
  border-radius: 18px;
  padding: 10px 8px;
  width: 50%;
  text-align: center;
  background-color: ${color.SUB};
  &:hover {
    background-color: ${color.MAIN};
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
        <AuthHeaderWrapper>
          <span>로그인</span>
          <LinkWrapper>
            <Link to="/register">회원가입</Link>
          </LinkWrapper>
        </AuthHeaderWrapper>
        <Form onSubmit={handleSubmit(onLoginSubmit)}>
          <Label>이메일 주소</Label>
          <Input
            type="email"
            name="email"
            {...register('email')}
            required
          />
          <Label>패스워드</Label>
          <Input
            type="password"
            name="password"
            {...register('password')}
            required
          />
          <Button
            type="submit"
            value="로그인"
          />
        </Form>
      </FormWrapper>
    </LoginWrapper>
  );
}
