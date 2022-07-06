import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  border: 3px solid white;
  border-radius: 10px;
  background-image: linear-gradient(rgb(255, 255, 255), rgb(170, 170, 170), rgb(104, 106, 124));
  min-width: 620px;
`;

export const WrapperInfoUser = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 8px;
  border: 1px solid white;
  border-radius: 5px;
  min-width: 500px;
  

  h1 {
    font-size: 32px;
    font-weight: bold;
    text-align: center;
    margin-top: 1rem;
  }

  h3 {
    font-size: 18px;
    font-weight: bold;
  }

  h4 {
    font-size: 16px;
    font-weight: bold;
  }
`;

export const WrapperStatusCount = styled.div`
  display: flex;
  align-items: center;
  margin-left: 16%;
  
  div {
    margin: 8px;
    text-align: center;
  }
`;

export const WrapperUserGeneric = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
  border: 2px solid white;  
  

  h3 {
    margin-right: 8px;
  }

  a {
    font-size: 18px;
    color: blue;
    font-weight: bold;
  }
`;

export const WrapperImage = styled.img`
  border-radius: 50%;
  width: 200px;
  margin: 8px;
`;
