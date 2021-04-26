import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const LoginWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

const FormWrapper = styled.div`
  height: 60vh;
`;

const Label = styled.label`
  color: darkblue;
  margin: 3px;
`;

const Input = styled.input`
  display: block;
	border: none;
	padding: 8px 15px;
	margin: 0 0 20px 0;
	width: 80%;
  border-radius: 8px;
`;

const Button = styled.input`
  margin: 20px 0;
  border: none;
  border-radius: 18px;
  padding: 10px 15px;
  width: 40%;
  background-color: yellow;
  &:hover {
    background-color: lightyellow;
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
        <h1>Log in to your account</h1>
        <form onSubmit={handleSubmit(onLoginSubmit)}>
          <Label>Email Address</Label>
          <Input
            type="email"
            name="email"
            {...register('email')}
          />
          <Label>Password</Label>
          <Input
            type="password"
            name="password"
            {...register('password')}
          />
          <Button
            type="submit"
            value="Login"
          />
        </form>
        <div>
          <span>Dont have account?</span>
          <Link to="/register">Sign up</Link>
        </div>
      </FormWrapper>
    </LoginWrapper>
  );
}
