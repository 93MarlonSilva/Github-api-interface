import React, { useState } from "react";
import * as S from "./styled";
import useGithub from "../../hooks/github-hooks";
import img from './image/icon.png';

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
        <input
          type="text"
          placeholder="Enter GitHub Username"
          onChange={(event) => setUsernameForSearch(event.target.value)}
        />
        <button type="submit" onClick={submitGetUser}>
          <span>Search</span>
        </button>
        <img src={img} alt='header' width='50'/>
      </S.Wrapper>
    </header>
  );
};

export default Header;
