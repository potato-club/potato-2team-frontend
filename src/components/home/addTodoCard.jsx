import React, { useState, useCallback } from "react";
import styled from "styled-components";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { DefaultColor, Palette } from "../../constants/defaultColor";

const AddTodoCard = ({ setAddTodoCard, onClickAddTodo }) => {
  const [backgroundColor, setBackgroundColor] = useState(DefaultColor);
  const [todoContent, setTodoContent] = useState("");

  const onChangeTodoContent = (e) => {
    if (e.target.value.length < 50) {
      setTodoContent(e.target.value);
    }
  };

  const onClickSaveAddTodo = () => {
    let temp = {
      color: backgroundColor[1],
      todoContent: todoContent,
    };
    onClickAddTodo(temp);
    setAddTodoCard(0);
  };

  const setAddTodoHandler = useCallback(
    () => setAddTodoCard(0),
    [setAddTodoCard]
  );
  return (
    <CardWrap color={backgroundColor}>
      <TopWrap>
        <Category
          color={Palette.BLUE}
          onClick={() => setBackgroundColor(Palette.BLUE)}
        />
        <Category
          color={Palette.OATMEAL}
          onClick={() => setBackgroundColor(Palette.OATMEAL)}
        />
        <Category
          color={Palette.DEEP_BLUE}
          onClick={() => setBackgroundColor(Palette.DEEP_BLUE)}
        />
        <Category
          color={Palette.BROWN}
          onClick={() => setBackgroundColor(Palette.BROWN)}
        />
        <Category
          color={Palette.PINK}
          onClick={() => setBackgroundColor(Palette.PINK)}
        />
        <IConButton>
          <AiOutlinePlusCircle size="24" onClick={onClickSaveAddTodo} />
        </IConButton>
      </TopWrap>
      <MiddleWarp
        type="textarea"
        color={backgroundColor}
        onChange={onChangeTodoContent}
        value={todoContent}
        wrap="on"
      />
      <BottomWarp>
        <IConButton onClick={setAddTodoHandler}>
          <AiOutlineMinusCircle size="24" />
        </IConButton>
      </BottomWarp>
    </CardWrap>
  );
};

export default AddTodoCard;

const CardWrap = styled.div`
  width: 200px;
  height: 160px;
  background-color: ${(props) => props.color};
  margin: 16px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
`;

const TopWrap = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 32px;
  background-color: #ffffff7d;
`;

const IConButton = styled.div`
  width: 32px;
  height: 32px;
  margin-top: 8px;
  text-align: center;
`;

const MiddleWarp = styled.textarea`
  padding: 4px 8px 0;
  width: 176px;
  height: 104px;
  background-color: ${(props) => props.color};
  border: none;
  font-size: 16px;
  white-space: pre-wrap;

  &:focus {
    outline: 0;
  }
`;

const BottomWarp = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Category = styled.button`
  width: 100%;
  height: 20px;
  width: 20px;
  margin: 0 4px;
  border: 2px solid black;
  border-radius: 16px;
  background-color: ${(props) => props.color};
  color: white;
`;
