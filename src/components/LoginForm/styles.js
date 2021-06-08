import styled from 'styled-components';
import { color } from '../../css/color';

export const LoginForm = {};

LoginForm.LoginWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-color: ${color.SUB};
`;

LoginForm.FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 420px;
  width: 400px;
  border-radius: 5px;
  background-color: ${color.WHITE};
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;

LoginForm.AuthHeaderWrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  top: -40px;
  width: 40%;
`;

LoginForm.LinkWrapper = styled.div`
  opacity: 0.3;
  &:hover {
    opacity: 1;
  }
`;

LoginForm.Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
`;

LoginForm.Label = styled.label`
  color: ${color.BOLD};
  margin: 3px;
`;

LoginForm.Input = styled.input`
  display: block;
  width: 240px;
	padding: 10px 8px;
	margin: 0 0 10px 0;
  border: none;
  border-radius: 3px;
  background-color: ${color.LIGHT};
`;

LoginForm.ResultMessage = styled.div`
  height: 0;
  position: relative;
  text-align: center;
`;

LoginForm.Button = styled.input`
  position: relative;
  bottom: -58px;
  text-align: center;
  width: 50%;
  margin: 20px 0;
  padding: 10px 8px;
  border: none;
  border-radius: 18px;
  background-color: ${color.SUB};
  &:hover {
    background-color: ${color.MAIN};
  }
  &:focus {
    outline: none;
  }
`;

LoginForm.SpinnerWrapper = styled.div`
  height: 0;
`;

LoginForm.Message = styled.p`
  position: relative;
  top: -9px;
  margin: 0;
  height: 0;
  font-size: 10px;
  color: red;
`;
