import styled from 'styled-components';
import { color } from '../../css/color';

export const AlarmRegister = {};

AlarmRegister.Container = styled.div`
  display: flex;
  height: 100vh;
`;

AlarmRegister.LeftSection = styled.div`
  width: 30vw;
  min-width: 120px;
  background-color: ${color.MAIN};
`;

AlarmRegister.RightSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 70vw;
  background-color: ${color.BACK};
`;
