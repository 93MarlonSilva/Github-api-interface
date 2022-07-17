import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;

  justify-content: center;
  padding: 1rem;
  border: 3px solid white;
  margin: auto;
  border-radius: 10px;
  background-image: linear-gradient(rgb(255, 255, 255), rgb(170, 170, 170), rgb(104, 106, 124));
  min-width: 730px; 



  input {
    border: 1px solid black;
    border-radius: 8px;
    width: 30rem;
    min-width: 4rem;
    padding: 8px;
    font-weight: 500;
    background-color: white;
    margin-left: 10px;
  }

  button {
    background-color: #225ed8;
    padding: 12px 16px;
    margin: 0 16px;
    border-radius: 50px;
    width: 10rem;
    text-align: center;
    background-color: black;

    &:hover {
      background-color: #2c5282;
      box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);
      
    }

    span {
      font-weight: bold;
      color: #ffff;
      
    }
  }
`;
