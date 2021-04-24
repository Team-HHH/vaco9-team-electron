import React, { useState } from 'react';
import styled from 'styled-components';

const AlarmRegisterForm = styled.form`
  width: 70vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SelectorWrapper = styled.div`
  width: 60vw;
  height: 30vh;
  margin: 20px;
`;

const HorizontalLine = styled.div`
  width: 60vw;
  height: 1px;
  background-color: black;
  margin: 0 20px;
`;

const SubmitButtonWrapper = styled.div`
  width: 60vw;
  display: flex;
  flex-direction: row-reverse;
`;

const SubmitButton = styled.input`
  width: 60px;
  height: 20px;
`;

export default function AlarmRegister({ onRegisterAlarmSubmit }) {
  const [time, setTime] = useState(null);
  const [bodyPart, setBodyPart] = useState("wrist");
  const [customVideo, setCustomVideo] = useState('');

  return (
    <div>
      <AlarmRegisterForm
        onSubmit={(e) => { onRegisterAlarmSubmit(e, time, bodyPart, customVideo) }}
      >
        <SelectorWrapper>
          <input
            type="time"
            name="time"
            onChange={(e) => { setTime(e.target.value) }}
            required
          />
        </SelectorWrapper>
        <HorizontalLine />
        <SelectorWrapper>
          <select
            name="bodyPart"
            onChange={(e) => { setBodyPart(e.target.value) }}
            required
          >
            <option value={'wrist'}>손목</option>
            <option value={'back'}>등</option>
            <option value={'waist'}>허리</option>
            <option value={'neck'}>목</option>
          </select>
        </SelectorWrapper>
        <label htmlFor="customVideo">커스텀 비디오 설정</label>
        <input type="text" name="customVideo" id="customVideo" onChange={(e) => setCustomVideo(e.target.value)}/>
        <SubmitButtonWrapper>
          <SubmitButton type="submit" value='저장하기' />
        </SubmitButtonWrapper>
      </AlarmRegisterForm>
    </div>
  );
}
