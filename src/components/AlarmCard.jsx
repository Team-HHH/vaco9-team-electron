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

const ToggleWrapper = styled.label`
  display: flex;
  text-transform: uppercase;
  font-size: 10px;
  font-weight: 600;
  user-select: none;
  align-items: center;
  &:not(:last-child) {
      margin-bottom: 10px;
  }
  .l {
      margin-left: 10px;
  }
`;

const Toggle = styled.input`
  opacity: 0;
  position: absolute;
  width: 1px;
  height: 1px;
  z-index: -1;
  &:checked {
      ~ i {
          background: #d1c9c7;
          &:after {
              left: 50%;
              background: #ff5f2e;
          }
      }
  }
`;

const ToggleButton = styled.i`
  outline: 0;
  display: block;
  width: 20px;
  height: 10px;
  position: relative;
  cursor: pointer;
  user-select: none;
  background: #c9d6de;
  border-radius: 10px;
  padding: 2px;
  transition: all 0.4s ease;
  &:after,
  &:before {
      position: relative;
      display: block;
      content: "";
      width: 50%;
      height: 100%;
  }

  &:after {
      left: 0;
      border-radius: 50%;
      background: #f0f5f9;
      transition: all 0.2s ease;
  }

  &:before {
      display: none;
  }
`;

export default function AlarmCard({ time, onDeleteButtonClick, onToggleClick }) {
  return (
    <Card>
      <Time>{time}</Time>
      <ToggleWrapper>
        <Toggle
          type="checkbox"
          id={time}
          defaultChecked={true}
          onChange={onToggleClick}
        />
        <ToggleButton></ToggleButton>
      </ToggleWrapper>
      <DeleteButton
        id={time}
        onClick={onDeleteButtonClick}
      >x</DeleteButton>
    </Card>
  );
}
