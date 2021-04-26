import React, { useState } from 'react';
import styled from 'styled-components';
import { color } from '../css/color';

const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const FormWrapper = styled.div`
  width: 90%;
  align-self: center;
  padding: 20px 10px;
  background-color: ${color.WHITE};
`;

const AlarmRegisterForm = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  margin-top: 25px;
  padding: 10px 10px;
  width: 90%;
  align-self: center;
  background-color: ${color.WHITE};
`;

const SelectTitle = styled.label`
  font-size: 20px;
`;

const Input = styled.input`
  margin: 10px 0;
	padding: 10px 15px;
	width: 70%;
  border: 1px solid ${color.LIGHT};
  &:focus {
    outline: none;
  }
`;

const BodyPart = styled.select`
  margin: 10px 0;
	padding: 10px 15px;
	width: 76%;
  border: 1px solid ${color.LIGHT};
  &:focus {
    outline: none;
  }
`;

const SubmitButtonWrapper = styled.div`
  width: 60vw;
  display: flex;
  flex-direction: row-reverse;
`;

const SubmitButton = styled.input`
  margin-top: 30px;
  padding: 10px 30px;
  border-radius: 5px;
  border: none;
  background-color: ${color.MAIN};
  &:hover {
    background-color: ${color.SUB}
  }
`;

export default function AlarmRegister({ onRegisterAlarmSubmit }) {
  const [time, setTime] = useState(null);
  const [bodyPart, setBodyPart] = useState("wrist");
  const [customVideo, setCustomVideo] = useState('');

  return (
    <>
      <Title>알람 시간 등록</Title>
      <RegisterContainer>

        <FormWrapper>
          <AlarmRegisterForm
            onSubmit={(e) => { onRegisterAlarmSubmit(e, time, bodyPart, customVideo) }}
          >

            <SelectTitle>스트레칭 알람 시간</SelectTitle>
            <Input
              type="time"
              name="time"
              onChange={(e) => { setTime(e.target.value) }}
              required
            />
            <SelectTitle>영상 카테고리</SelectTitle>
            <BodyPart
              name="bodyPart"
              onChange={(e) => { setBodyPart(e.target.value) }}
              required
            >
              <option value={'wrist'}>손목</option>
              <option value={'back'}>등</option>
              <option value={'waist'}>허리</option>
              <option value={'neck'}>목</option>
            </BodyPart>
            <SelectTitle htmlFor="customVideo">커스텀 비디오 설정</SelectTitle>
            <Input type="text" name="customVideo" id="customVideo" onChange={(e) => setCustomVideo(e.target.value)} />
            <SubmitButtonWrapper>
              <SubmitButton type="submit" value='저장하기' />
            </SubmitButtonWrapper>
          </AlarmRegisterForm>
        </FormWrapper>
      </RegisterContainer>
    </>
  );
}
