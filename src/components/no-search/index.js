import React from "react";
import * as S from "./styled";
import img from './image/whats2.png';

const NoSearch = () => { // Tela inicial nenhuma procura feita
  return (
    <S.Wrapper>
      <img alt="img" src={img} width='800px' height= '300px' />
    </S.Wrapper>
  );
};

export default NoSearch;
