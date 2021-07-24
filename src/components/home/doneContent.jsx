import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import TodoCard from "./todoCard";

export const DoneContent = () => {
  const [doneList, setDoneList] = useState([
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
  //       "https://gamsung-coding.shop/api/v1/todo?memberId=1&status=DONE"
  //     );
  //     setDoneList(data);
  //   } catch (e) {
  //     console.log(`${e.response.data.message}`);
  //   }
  // };

  // useEffect(() => {
  //   receivedData();
  // }, []);

  return (
    <ContentWrap>
      {doneList.length ? (
        doneList.map(({ color, todoContent, date }) => (
          <TodoCard color={color} todoContent={todoContent} date={date} />
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
