import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background-color: #e0f3ff;
  height: 60px;
  display: flex;
`;

const Time = styled.span`
  margin: auto auto;
  width: 100%;
  text-align: center;
`;

const DeleteButton = styled.button`
  margin: 0 0 auto auto;
`;

export default function AlarmCard({ time, onDeleteButtonClick }) {
  return (
    <Card>
      <Time>{time}</Time>
      <DeleteButton
        id={time}
        onClick={onDeleteButtonClick}
      >x</DeleteButton>
    </Card>
  );
}
