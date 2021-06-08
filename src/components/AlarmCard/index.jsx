import React from 'react';
import { formatTime } from '../../util/index';
import { AlarmCard as S } from './styles';

export default function AlarmCard(props) {
  const { time, onDeleteButtonClick, onToggleClick } = props;
  const { period, hhmm } = formatTime(time);

  return (
    <S.Card>
      <S.Time>{period}</S.Time>
      <S.Time>{hhmm}</S.Time>
      <S.ToggleWrapper>
        <S.Toggle
          type="checkbox"
          id={time}
          defaultChecked={true}
          onChange={onToggleClick}
        />
        <S.ToggleButton />
      </S.ToggleWrapper>
      <S.DeleteButtonWrapper>
        <S.DeleteButton
          id={time}
          onClick={onDeleteButtonClick}
        >x</S.DeleteButton>
      </S.DeleteButtonWrapper>
    </S.Card>
  );
}
