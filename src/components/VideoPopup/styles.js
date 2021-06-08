import styled, { css } from 'styled-components';
import { color } from '../../css/color';

export const VideoPopup = {};

VideoPopup.PopupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
`;

VideoPopup.VideoWrapper = styled.div`
  display: flex;
  width: 100%;
  height: ${props => props.content ? 'calc(100vh - 200px)' : '100vh'};

  div {
    width: 100%;
    height: 100%;
  }
`;

VideoPopup.BannerWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 200px;
`;

VideoPopup.Banner = styled.img`
  width: 100%;
  height: 100%;
  &:hover {
    cursor: pointer;
  }
`;

VideoPopup.LoadingWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: ${color.SUB};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  opacity: 1;

  ${props =>
    css`
      transition: all ${props.speed} ${props.delay} ease;
    `}

  ${props =>
    props.hide &&
    css`
      top: -100%;
      opacity: 0;
    `}

  p {
    margin: 0 0 1em 0;
    font-size: 5em;
    color: ${color.BOLD};
  }
`;
