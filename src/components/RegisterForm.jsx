import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const RegisterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
const FormWrapper = styled.div`
  height: 80vh;
`;
const Label = styled.label`
  color: yellowgreen;
  margin: 3px;
`;
const Input = styled.input`
  display: block;
  border: none;
	padding: 8px 15px;
  margin: 0 0 10px 0;
	width: 80%;
  border-radius: 8px;
  background-color: #eee;
`;
const Button = styled.input`
  margin: 20px 0;
  border: none;
  border-radius: 18px;
  padding: 10px 15px;
  width: 40%;
  background-color: yellow;
  &:hover {
    background-color: yellowgreen;
    color: black;
  }
  &:focus {
    outline: none;
  }
`;
const Message = styled.p`
  margin: 0;
  font-size: 10px;
  color: red;
`;

export default function Register({ onRegisterSubmit }) {
  const {
    register,
    handleSubmit,
  } = useForm();
  return (
    <RegisterWrapper>
      <FormWrapper>
        <h1>Create your account</h1>
        <form
          name="form"
          onSubmit={handleSubmit(onRegisterSubmit)}
        >
          <Label>Email</Label>
          <Input
            type="email"
            name="email"
            {...register('email')}
            required
          />
          <Label>Name</Label>
          <Input
            type="text"
            name="name"
            {...register('name')}
            required
          />
          <Label>Password</Label>
          <Input
            type="password"
            name="password"
            {...register('password')}
            minLength="8"
            required
          />
          <Label>Confirm Password</Label>
          <Input
            type="password"
            name="passwordConfirm"
            {...register('passwordConfirm')}
            minLength="8"
            required
          />
          <Button
            type="submit"
            value="Register"
          />
        </form>
        <div>
          <span>Have account?</span>
          <Link to="/login">Login</Link>
        </div>
      </FormWrapper>
    </RegisterWrapper>
  );
}
