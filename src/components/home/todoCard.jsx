import React from "react";
import styled from "styled-components";
import {
  AiOutlineCheckCircle,
  AiOutlineEdit,
  AiOutlineDelete,
} from "react-icons/ai";
import { Palette } from "../../constants/defaultColor";
import { updateTodo, deleteTodo } from "../core/api/todo";

const TodoCard = ({ id, color, todoContent, date, todo, setUpdateCheck }) => {
  const onclickCompletionTodo = () => {
    console.log("ghkrdls: ", {
      color: color,
      content: todoContent,
      status: "DONE",
    });
    const data = updateTodo(`https://gamsung-coding.shop/api/v1/todo/${id}`, {
      color: color,
      content: todoContent,
      status: "DONE",
    });
    data.then(() => {
      setUpdateCheck((prevState) => !prevState);
    });
  };

  const onclickDeleteTodo = () => {
    const data = deleteTodo(`https://gamsung-coding.shop/api/v1/todo/${id}`);
    data.then(() => {
      setUpdateCheck((prevState) => !prevState);
    });
  };

  return (
    <CardWrap color={Palette[color]}>
      {todo === "1" ? (
        <TopWrap>
          <IConButton>
            <AiOutlineEdit size="24" />
          </IConButton>
          <IConButton onClick={onclickCompletionTodo}>
            <AiOutlineCheckCircle size="24" />
          </IConButton>
        </TopWrap>
      ) : (
        <TopWrap />
      )}
      <MiddleWarp>{todoContent}</MiddleWarp>
      <BottomWarp>
        <CreateDate>{date}</CreateDate>
        <IConButton onClick={onclickDeleteTodo}>
          <AiOutlineDelete size="24" />
        </IConButton>
      </BottomWarp>
    </CardWrap>
  );
};

export default TodoCard;

const CardWrap = styled.div`
  width: 200px;
  height: 160px;
  background-color: ${(props) => props.color};
  margin: 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: space-between;
  border-radius: 8px;
`;

const TopWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 32px;
  background-color: #ffffff7d;
`;

const IConButton = styled.div`
  width: 32px;
  height: 32px;
  margin-top: 4px;
  text-align: center;
`;

const MiddleWarp = styled.div`
  padding: 4px 8px 0;
  height: 104px;
`;

const BottomWarp = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CreateDate = styled.div`
  padding-top: 8px;
  padding-left: 8px;
`;
