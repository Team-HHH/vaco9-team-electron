import React, { useState } from 'react';

export default function AlarmRegister({ onRegisterAlarmSubmit }) {
  const [time, setTime] = useState(null);
  const [bodyPart, setBodyPart] = useState(null);

  return (
    <div>
      <form
        onSubmit={(e) => { onRegisterAlarmSubmit(e, time, bodyPart) }}
      >
        <input
          type='time'
          name='time'
          onChange={(e) => { setTime(e.target.value) }}
        />
        <select
          name='bodyPart'
          onChange={(e) => { setBodyPart(e.target.value) }}
        >
          <option value={''}>부위별 스트레칭</option>
          <option value={'wrist'}>손목</option>
          <option value={'back'}>등</option>
          <option value={'waist'}>허리</option>
          <option value={'neck'}>목</option>
        </select>
        <input type='submit' value='저장하기' />
      </form>
    </div>
  );
}
