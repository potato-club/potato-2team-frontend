import React from "react";
import styled from "styled-components";
import { IoMdAdd } from "react-icons/io";

const MenuWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 136px;
  height: 100%;
  border-right: 2px solid #dddddd;
  border-radius: 0 0 0 32px;
`;

const AddTodoButton = styled.div`
  width: 40px;
  height: 40px;
  margin: 32px 0;
  text-align: center;
  border-radius: 32px;
  background-color: #303030;
`;

const Category = styled.button`
  width: 100%;
  height: 24px;
  width: 24px;
  margin: 16px;
  border: 1px solid white;
  border-radius: 24px;
  background-color: ${(props) => props.color};
  color: white;
`;

const menu = () => {
  return (
    <MenuWrap>
      <AddTodoButton>
        <IoMdAdd size="40" fill="white" />
      </AddTodoButton>
      <Category color="black" />
      <Category color="#A7C4DA" />
      <Category color="#818D90" />
      <Category color="#967A6D" />
      <Category color="#E5BBB4" />
      <Category color="#E4D8D3" />
    </MenuWrap>
  );
};

export default menu;
