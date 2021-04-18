import React from 'react';

export default function AlarmRegister() {
  return (
    <div>
      <form>
        <input
          type='time'
          name='time'
        />
        <select>
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
