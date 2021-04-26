import React from 'react';
import styled from 'styled-components';
import { color } from '../css/color';

const Card = styled.div`
  background-color: ${color.WHITE};
  height: 60px;
  display: flex;
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;

const Time = styled.span`
  margin: auto auto;
  width: 100%;
  text-align: center;
  opacity: 0.6;
  font-size: 24px;
  color: ${color.MAIN_FONT}
`;

const DeleteButton = styled.button`
  margin: 0 0 auto auto;
  border: none;
  opacity: 0.3;
  &:hover {
    opacity: 1;
  }
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
          background: ${color.SUB};
          &:after {
              left: 50%;
              background: ${color.HOVER};
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
  background: ${color.LIGHT};
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
      background: ${color.DARK};
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
