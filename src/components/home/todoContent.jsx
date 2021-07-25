import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Menu from "./menu";
import TodoCard from "./todoCard";
import AddTodoCard from "./addTodoCard";
import { Palette } from "../../constants/defaultColor";

const TodoContent = () => {
  const history = useHistory();
  const [currentCategory, setCurrentCategory] = useState("all");
  const [addTodoCard, setAddTodoCard] = useState(0);
  const [todoList, setTodoList] = useState([]);

  const receivedData = async () => {
    try {
      const { data } = await axios.get(
        "https://gamsung-coding.shop/api/v1/todo?status=TODO", {
          headers: {
            Authorization: localStorage.getItem("userKey"),
          }
        }
      );
      setTodoList(data.data);
    } catch (e) {
      console.log(`${e.response.data.message}`);
    }
  };

  const onClickAddTodo = (addItem) => {
    axios.post("https://gamsung-coding.shop/api/v1/todo", addItem, {
      headers: {
        Authorization: localStorage.getItem("userKey"),
      },
    });
  };

  useEffect(() => {
    receivedData();
  }, [addTodoCard]);

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
          />
        ) : (
          <NoneCard />
        )}
        {todoList.length ? (
          todoList.reduce((prev, next, cI) => {
            if (currentCategory === "all" || Palette[next.color] === currentCategory) {
              prev.push(
                <TodoCard
                  key={cI}
                  color={next.color}
                  todoContent={next.content}
                  date={next.dateTime}
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
