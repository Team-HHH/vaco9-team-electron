import styled from 'styled-components';
import { color } from '../../css/color';

export const Loading = {};

Loading.Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: ${color.MAIN};
`;
