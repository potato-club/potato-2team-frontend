import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Menu from "./menu";
import TodoCard from "./todoCard";
import AddTodoCard from "./addTodoCard";
import { Palette } from "../../constants/defaultColor";
import useTodo from "../../hooks/useTodo";
import { setTodo } from "../core/api/todo";

const TodoContent = () => {
  const [addTodoCard, setAddTodoCard] = useState(0);
  const [updateCheck, setUpdateCheck] = useState(0);
  const [currentCategory, setCurrentCategory] = useState("all");
  const { todoList } = useTodo(updateCheck, "TODO");

  const onClickAddTodo = (addItem) => {
    const data = setTodo(`https://gamsung-coding.shop/api/v1/todo`, addItem);
    data.then(() => {
      setAddTodoCard(0);
      setUpdateCheck((prevState) => !prevState);
    });
  };

  useEffect(() => {}, [updateCheck]);

  return (
    <ContentWrap>
      <Menu
        setAddTodoCard={setAddTodoCard}
        setCurrentCategory={setCurrentCategory}
      />
      <ShowTodo>
        {addTodoCard ? (
          <AddTodoCard
            setAddTodoCard={setAddTodoCard}
            onClickAddTodo={onClickAddTodo}
            setUpdateCheck={setUpdateCheck}
          />
        ) : (
          <NoneCard />
        )}
        {todoList ? (
          todoList.reduce((prev, next) => {
            if (
              currentCategory === "all" ||
              Palette[next.color] === currentCategory
            ) {
              prev.push(
                <TodoCard
                  key={next.id}
                  id={next.id}
                  color={next.color}
                  todoContent={next.content}
                  date={next.dateTime}
                  todo="1"
                  setUpdateCheck={setUpdateCheck}
                />
              );
            }
            return prev;
          }, [])
        ) : (
          <></>
        )}
      </ShowTodo>
    </ContentWrap>
  );
};

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
  justify-content: flex-start;
  align-content: flex-start;
`;

const NoneCard = styled.div``;

export default TodoContent;
