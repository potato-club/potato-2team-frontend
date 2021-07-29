import React, { useState, useEffect } from "react";
import { getTodo } from "../components/core/api/todo";

const useTodo = (check, status) => {
  const [todoList, setTodoList] = useState();

  useEffect(() => {
    void (async function () {
      try {
        void (async function () {
          const data = getTodo(
            `https://gamsung-coding.shop/api/v1/todo?status=${status}`
          );
          data.then((value) => {
            setTodoList(value.data.data);
          });
        })();
      } catch (e) {
        //throw Error
      }
    })();
  }, [check, status]);

  return {
    todoList,
  };
};

export default useTodo;
