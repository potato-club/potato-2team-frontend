import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import Menu from "./menu";
import TodoCard from "./todoCard";
import AddTodoCard from "./addTodoCard";

const TodoContent = () => {
  const [currentCategory, setCurrentCategory] = useState("all");
  const [addTodoCard, setAddTodoCard] = useState(0);
  const [todoList, setTodoList] = useState([
    {
      color: "BLUE",
      todoContent: "투두 리스트 작성",
      date: "2021.07.10",
    },
    {
      color: "BROWN",
      todoContent: "학교갔다가 잠자기",
      date: "2021.07.10",
    },
    {
      color: "PINK",
      todoContent: "수업 자료 만들기",
      date: "2021.07.10",
    },
    {
      color: "DEEP_BLUE",
      todoContent: "10시전에 일어나기",
      date: "2021.07.10",
    },
    {
      color: "OATMEAL",
      todoContent: "알고리즘 과제하기",
      date: "2021.07.10",
    },
    {
      color: "PINK",
      todoContent: "중국어 워크북 P.26~29",
      date: "2021.07.10",
    },
  ]);

  // const receivedData = async () => {
  //   try {
  //     const { data } = await axios.get(
  //       "https://gamsung-coding.shop/api/v1/todo?memberId=1&status=TODO"
  //     );
  //     setTodoList(data);
  //   } catch (e) {
  //     console.log(`${e.response.data.message}`);
  //   }
  // };

  const onClickAddTodo = (addItem) => {
    // axios.post("https://gamsung-coding.shop/api/v1/todo", addItem, {
    //   headers: {
    //     Authorization: localStorage.getItem("userKey"),
    //   },
    // });
    // receivedData();
  };

  // useEffect(() => {
  //   receivedData();
  // }, []);

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
            if (currentCategory === "all" || next.color === currentCategory) {
              prev.push(
                <TodoCard
                  key={cI}
                  color={next.color}
                  todoContent={next.todoContent}
                  date={next.date}
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
