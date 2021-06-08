import React from 'react';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import { ErrorMessage } from '@hookform/error-message';
import { schema } from '../../validations/loginFormSchema';
import { commonErrorMessage } from '../../constants/validationErrorMessage';
import { Link } from 'react-router-dom';
import Spinner from '../Spinner/index.jsx';
import { LoginForm as S } from './styles';

export default function Login({ isError, errorMessage, isFetching, onLoginSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: joiResolver(schema)
  });

  return (
    <>
      <S.LoginWrapper>
        <S.FormWrapper>
          <S.AuthHeaderWrapper>
            <span>로그인</span>
            <S.LinkWrapper>
              <Link to="/register">회원가입</Link>
            </S.LinkWrapper>
          </S.AuthHeaderWrapper>
          <S.Form onSubmit={handleSubmit(onLoginSubmit)}>
            <S.Label>이메일 주소</S.Label>
            <S.Input
              type="email"
              name="email"
              {...register('email')}
              required
            />
            <ErrorMessage
              errors={errors}
              name="email"
              render={() => <Message>{commonErrorMessage.INVALID_EMAIL}</Message>}
            />
            <S.Label>패스워드</S.Label>
            <S.Input
              type="password"
              name="password"
              {...register('password')}
              required
            />
            <ErrorMessage
              errors={errors}
              name="password"
              render={() => <Message>{commonErrorMessage.INVALID_PASSWORD}</Message>}
            />
            <S.ResultMessage>{errorMessage}</S.ResultMessage>
            <S.Button
              type="submit"
              value="로그인"
            />
            <S.SpinnerWrapper>
              {isFetching && <Spinner />}
            </S.SpinnerWrapper>
          </S.Form>
        </S.FormWrapper>
      </S.LoginWrapper>
    </>
  );
}
