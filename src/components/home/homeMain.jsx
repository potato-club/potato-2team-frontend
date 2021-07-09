import React from "react";
import styled, { createGlobalStyle } from "styled-components";

import Content from "./content";

const GlobalStyle = createGlobalStyle`
  html {
    background: gray;
  }
`;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: 56px;
`;

const HomeWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  width: 1080px;
  background-color: white;
  border-radius: 0 0 32px 32px;
`;

const HeaderWrap = styled.div`
  display: flex;
  justify-content: space-between;
  background: gray;
`;

const ContentStateWrap = styled.div`
  display: flex;
`;

const TodoDoneButton = styled.button`
  font-size: 18px;
  width: 80px;
  height: 40px;
  background-color: white;
  border-color: #dddddd;
  border-bottom: none;
`;

const UserName = styled.div`
  height: 34px;
  font-size: 18px;
  font-weight: 600;
  padding: 4px 8px 0 8px;
  border: 2px solid #dddddd;
  border-bottom: none;
  background-color: white;
`;

const homeMain = () => {
  return (
    <Wrapper>
      <GlobalStyle />
      <HomeWrap>
        <HeaderWrap>
          <ContentStateWrap>
            <TodoDoneButton>Todo</TodoDoneButton>
            <TodoDoneButton>Done</TodoDoneButton>
          </ContentStateWrap>
          <UserName>UserName</UserName>
        </HeaderWrap>
        <Content />
      </HomeWrap>
    </Wrapper>
  );
};

export default homeMain;
