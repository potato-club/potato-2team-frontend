import React from "react";
import styled from "styled-components";
import Menu from "./menu";
import TodoCard from "./todoCard";

const ContentWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  border: 2px solid #dddddd;
  border-radius: 0 0 32px 32px;
  height: 800px;
`;

const ShowTodo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: flex-start;
`;

const content = () => {
  return (
    <ContentWrap>
      <Menu />
      <ShowTodo>
        <TodoCard color="#967A6D" />
      </ShowTodo>
    </ContentWrap>
  );
};

export default content;
