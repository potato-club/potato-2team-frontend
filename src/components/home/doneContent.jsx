import React from "react";
import styled from "styled-components";
import TodoCard from "./todoCard";
import useTodo from "../../hooks/useTodo";

export const DoneContent = () => {
  const { todoList: doneList } = useTodo(0, "DONE");

  return (
    <ContentWrap>
      {doneList ? (
        doneList.map(({ id, color, content, dateTime }) => (
          <TodoCard
            key={id}
            id={id}
            color={color}
            todoContent={content}
            date={dateTime}
            todo="0"
          />
        ))
      ) : (
        <NoneCard />
      )}
    </ContentWrap>
  );
};

export default DoneContent;

const ContentWrap = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: flex-start;
  border: 2px solid #dddddd;
  border-radius: 0 0 32px 32px;
  height: 800px;
`;

const NoneCard = styled.div``;
