import React from "react";
import * as S from "./styled";
import img from './image/whats2.png';

const NoSearch = () => {
  return (
    <S.Wrapper>
      <img alt="img" src={img} width='70%' height='60%' />
    </S.Wrapper>
  );
};

export default NoSearch;
