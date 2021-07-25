import React, { useCallback } from "react";
import styled from "styled-components";
import { IoMdAdd } from "react-icons/io";
import { AiOutlineDelete } from "react-icons/ai";
import { Palette } from "../../constants/defaultColor";

const Menu = ({ setAddTodoCard, setCurrentCategory }) => {
  const setAddTodoHandler = useCallback(
    () => setAddTodoCard(1),
    [setAddTodoCard]
  );
  return (
    <MenuWrap>
      <TopMiddleWrap>
        <AddTodoButton onClick={setAddTodoHandler}>
          <IoMdAdd size="40" fill="white" />
        </AddTodoButton>
        <Category color="black" onClick={() => setCurrentCategory("all")} />
        <Category
          color={Palette.BLUE}
          onClick={() => setCurrentCategory(Palette.BLUE)}
        />
        <Category
          color={Palette.OATMEAL}
          onClick={() => setCurrentCategory(Palette.OATMEAL)}
        />
        <Category
          color={Palette.DEEP_BLUE}
          onClick={() => setCurrentCategory(Palette.DEEP_BLUE)}
        />
        <Category
          color={Palette.BROWN}
          onClick={() => setCurrentCategory(Palette.BROWN)}
        />
        <Category
          color={Palette.PINK}
          onClick={() => setCurrentCategory(Palette.PINK)}
        />
      </TopMiddleWrap>
      <IConButton>
        <AiOutlineDelete size="40" fill="black" />
      </IConButton>
    </MenuWrap>
  );
};

export default Menu;

const MenuWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 136px;
  height: 100%;
  border-right: 2px solid #dddddd;
  border-radius: 0 0 0 32px;
`;

const TopMiddleWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
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

const IConButton = styled.div`
  width: 32px;
  height: 32px;
  margin-bottom: 32px;
`;
