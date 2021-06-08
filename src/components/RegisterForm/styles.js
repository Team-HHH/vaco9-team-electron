import styled from 'styled-components';
import { color } from '../../css/color';

export const RegisterForm = {};

RegisterForm.RegisterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-color: ${color.SUB};
`;

RegisterForm.FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 85%;
  width: 400px;
  background-color: ${color.WHITE};
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;

RegisterForm.AuthHeaderWrapper = styled.div`
  display: flex;
  position: relative;
  top: 18px;
  width: 40%;
  justify-content: space-between;
`;

RegisterForm.LinkWrapper = styled.div`
  opacity: 0.3;
  &:hover {
    opacity: 1;
  }
`;

RegisterForm.Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
`;

RegisterForm.Label = styled.label`
  color: ${color.BOLD};
  margin: 3px;
`;

RegisterForm.Input = styled.input`
  display: block;
	border: none;
	padding: 8px 8px;
	margin: 0 0 8px 0;
	width: 240px;
  border-radius: 3px;
  background-color: ${color.LIGHT};
`;

RegisterForm.Button = styled.input`
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

RegisterForm.Gender = styled.select`
  margin: 10px 0;
	padding: 10px 15px;
	width: 76%;
  border: 1px solid ${color.LIGHT};
  &:focus {
    outline: none;
  }
`;

RegisterForm.Country = styled.select`
  margin: 10px 0;
	padding: 10px 15px;
	width: 76%;
  border: 1px solid ${color.LIGHT};
  &:focus {
    outline: none;
  }
`;

RegisterForm.Message = styled.p`
  margin: 0;
  font-size: 10px;
  color: red;
`;
