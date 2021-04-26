import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { color } from '../css/color';

const RegisterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-color: ${color.WHITE};
`;
const FormWrapper = styled.div`
  height: 70vh;
  width: 30%;
`;

const Form = styled.form``;

const Label = styled.label`
  color: ${color.BOLD};
  margin: 3px;
`;
const Input = styled.input`
  display: block;
  border: none;
	padding: 8px 15px;
  margin: 0 0 10px 0;
	width: 100%;
  border-radius: 8px;
  background-color: #eee;
`;
const Button = styled.input`
   margin: 20px 0;
  border: none;
  border-radius: 18px;
  padding: 10px 15px;
  width: 50%;
  background-color: ${color.SUB};
  &:hover {
    background-color: ${color.MAIN};
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
        <h1>회원가입</h1>
        <Form
          name="form"
          onSubmit={handleSubmit(onRegisterSubmit)}
        >
          <Label>이메일 주소</Label>
          <Input
            type="email"
            name="email"
            {...register('email')}
            required
          />
          <Label>이름</Label>
          <Input
            type="text"
            name="name"
            {...register('name')}
            required
          />
          <Label>패스워드</Label>
          <Input
            type="password"
            name="password"
            {...register('password')}
            minLength="8"
            required
          />
          <Label>패스워드 확인</Label>
          <Input
            type="password"
            name="passwordConfirm"
            {...register('passwordConfirm')}
            minLength="8"
            required
          />
          <Button
            type="submit"
            value="회원가입"
          />
        </Form>
        <div>
          <span>계정이 있으신가요?</span>
          <Link to="/login">로그인</Link>
        </div>
      </FormWrapper>
    </RegisterWrapper>
  );
}
