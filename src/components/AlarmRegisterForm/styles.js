import styled from 'styled-components';
import { color } from '../../css/color';

export const AlarmRegisterForm = {};

AlarmRegisterForm.RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

AlarmRegisterForm.FormWrapper = styled.div`
  align-self: center;
  width: 90%;
  padding: 20px 10px;
  background-color: ${color.WHITE};
`;

AlarmRegisterForm.AlarmRegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  background-color: ${color.WHITE};
`;

AlarmRegisterForm.Title = styled.h2`
  align-self: center;
  width: 90%;
  margin-top: 25px;
  padding: 10px 10px;
  background-color: ${color.WHITE};
`;

AlarmRegisterForm.SelectTitle = styled.label`
  font-size: 20px;
`;

AlarmRegisterForm.Input = styled.input`
  width: 70%;
  margin: 10px 0;
	padding: 10px 15px;
  border: 1px solid ${color.LIGHT};
  &:focus {
    outline: none;
  }
`;

AlarmRegisterForm.BodyPart = styled.select`
  width: 76%;
  margin: 10px 0;
	padding: 10px 15px;
  border: 1px solid ${color.LIGHT};
  &:focus {
    outline: none;
  }
`;

AlarmRegisterForm.SubmitButtonWrapper = styled.div`
  width: 60vw;
  display: flex;
  flex-direction: row-reverse;
`;

AlarmRegisterForm.SubmitButton = styled.input`
  margin-top: 30px;
  padding: 10px 30px;
  border-radius: 5px;
  border: none;
  background-color: ${color.MAIN};
  &:hover {
    background-color: ${color.SUB}
  }
`;
