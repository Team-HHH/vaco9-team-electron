import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import countries from '../../constants/countries';
import { RegisterForm as S } from './styles';

export default function Register({ onRegisterSubmit }) {
  const {
    register,
    handleSubmit,
  } = useForm();

  return (
    <S.RegisterWrapper>
      <S.FormWrapper>
        <S.AuthHeaderWrapper>
          <S.LinkWrapper>
            <Link to="/login">로그인</Link>
          </S.LinkWrapper>
          <span>회원가입</span>
        </S.AuthHeaderWrapper>
        <S.Form
          name="form"
          onSubmit={handleSubmit(onRegisterSubmit)}
        >
          <S.Label>이메일 주소</S.Label>
          <S.Input
            type="email"
            name="email"
            {...register('email')}
            required
          />
          <S.Label>이름</S.Label>
          <S.Input
            type="text"
            name="name"
            {...register('name')}
            required
          />
          <S.Label>패스워드</S.Label>
          <S.Input
            type="password"
            name="password"
            {...register('password')}
            minLength="8"
            required
          />
          <S.Label>패스워드 확인</S.Label>
          <S.Input
            type="password"
            name="passwordConfirm"
            {...register('passwordConfirm')}
            minLength="8"
            required
          />
          <S.Label>나이</S.Label>
          <S.Input
            type="number"
            name="age"
            min="18"
            max="65"
            {...register('age', { min: 18, max: 65 })}
            required
          />
          <S.Label>성별</S.Label>
          <S.Gender
            name="gender"
            {...register('gender')}
            required
          >
            <option value={'male'}>남자</option>
            <option value={'female'}>여자</option>
          </S.Gender>
          <S.Label>지역</S.Label>
          <S.Country
            name="country"
            {...register('country')}
            required
          >
            {
              Object.entries(countries).map((item) => {
                const [englishName, koreanName] = item;

                return <option key={item} value={englishName}>{koreanName}</option>;
              })
            }
          </S.Country>
          <S.Button
            type="submit"
            value="회원가입"
          />
        </S.Form>
      </S.FormWrapper>
    </S.RegisterWrapper>
  );
}
