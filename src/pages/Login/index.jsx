import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import LoginForm from '../../components/LoginForm/index.jsx';
import { fetchLogin } from '../../reducers/login';
import { Login as S } from './styles';

export default function Login() {
  const isError = useSelector((state) => state.loginReducer.isError);
  const errorMessage = useSelector((state) => state.loginReducer.errorMessage);
  const isFetching = useSelector((state) => state.loginReducer.isFetching);
  const dispatch = useDispatch();

  function handleLoginSubmit(data) {
    dispatch(fetchLogin(data));
  }

  return (
    <S.Container>
      <LoginForm
        isError={isError}
        errorMessage={errorMessage}
        isFetching={isFetching}
        onLoginSubmit={handleLoginSubmit} />
    </S.Container>
  );
}
