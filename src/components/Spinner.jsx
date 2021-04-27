import React from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import { color } from '../css/color';

export default function Spinner() {
  return (
    <ClipLoader
      color={color.BOLD}
      loading={true}
      size={30}
      margin={30}
    />
  );
}
