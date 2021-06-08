import React from 'react';
import bodyParts from '../../constants/bodyParts';
import { useForm } from 'react-hook-form';
import { AlarmRegisterForm as S } from './styles';

export default function AlarmRegisterForm({ onRegisterAlarmSubmit }) {
  const {
    register,
    handleSubmit,
  } = useForm();

  return (
    <>
      <S.Title>알람 시간 등록</S.Title>
      <S.RegisterContainer>
        <S.FormWrapper>
          <S.AlarmRegisterForm
            onSubmit={handleSubmit(onRegisterAlarmSubmit)}
          >
            <S.SelectTitle>스트레칭 알람 시간</S.SelectTitle>
            <S.Input
              type="time"
              name="time"
              {...register('time')}
              required
            />
            <S.SelectTitle>영상 카테고리</S.SelectTitle>
            <S.BodyPart
              name="bodyPart"
              {...register('bodyPart')}
              required
            >
              <option value={'wrist'}>{bodyParts.wrist}</option>
              <option value={'back'}>{bodyParts.back}</option>
              <option value={'waist'}>{bodyParts.waist}</option>
              <option value={'neck'}>{bodyParts.neck}</option>
            </S.BodyPart>
            <S.SelectTitle htmlFor="customVideo">커스텀 비디오 설정</S.SelectTitle>
            <S.Input
              type="text"
              name="customVideo"
              id="customVideo"
              {...register('customVideo')}
            />
            <S.SubmitButtonWrapper>
              <S.SubmitButton type="submit" value='저장하기' />
            </S.SubmitButtonWrapper>
          </S.AlarmRegisterForm>
        </S.FormWrapper>
      </S.RegisterContainer>
    </>
  );
}
