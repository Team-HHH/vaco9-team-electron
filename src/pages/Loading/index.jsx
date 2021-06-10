import React, { useEffect } from 'react';
import { ipcRenderer } from 'electron';
import { useDispatch } from 'react-redux';
import { fetchLogin } from '../../reducers/login';
import Spinner from '../../components/Spinner/index.jsx';
import { Loading as S } from './styles';

export default function Loading() {
  const dispatch = useDispatch();

  useEffect(async () => {
    ipcRenderer.on('loginDataExist', async (event, data) => {
      const userData = {
        email: data.account,
        password: data.password,
      };

      dispatch(fetchLogin(userData));
    });

    ipcRenderer.on('loginDataDoesNotExist', (event, data) => {
      window.location.hash = '#/login';
    });
  });

  return (
    <S.Container>
      <Spinner
        color="white"
        loading={true}
        size={40}
      />
    </S.Container>
  );
}
