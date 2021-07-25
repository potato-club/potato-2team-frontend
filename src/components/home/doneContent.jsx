import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import TodoCard from "./todoCard";

export const DoneContent = () => {
  const [doneList, setDoneList] = useState([]);

  const receivedData = async () => {
    try {
      const { data } = await axios.get(
        "https://gamsung-coding.shop/api/v1/todo?status=DONE",{
          headers: {
            Authorization: localStorage.getItem("userKey"),
          }
        }
      );
      setDoneList(data);
    } catch (e) {
      console.log(`${e.response.data.message}`);
    }
  };

  useEffect(() => {
    receivedData();
  }, []);

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
