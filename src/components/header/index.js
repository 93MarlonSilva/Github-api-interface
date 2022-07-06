import React, { useState } from "react";
import * as S from "./styled";
import useGithub from "../../hooks/github-hooks";
import img from './image/icon.png';
import img1 from './image/home.jpg'

const Header = () => {
  const { getUser } = useGithub();
  const [usernameForSearch, setUsernameForSearch] = useState();

  const submitGetUser = () => {
    if (!usernameForSearch) return;
    return getUser(usernameForSearch);
  };

  return (
    <header>
      <S.Wrapper>
      <a alt='HOME' href="http://localhost:3000/">
        <img 
            style={{cursor:'pointer'}}
            src={img1} 
            alt='header' 
            width='50' />
        </a>  
        <input
          type="text"
          placeholder="Enter GitHub Username"
          onChange={(event) => setUsernameForSearch(event.target.value)}
        />
        <button type="submit" onClick={submitGetUser}>
          <span>Search</span>
        </button>
        <img src={img} alt='header' width='50' />   
      </S.Wrapper>
    </header>
  );
};

export default Header;
