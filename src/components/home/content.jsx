import React from "react";
import styled from "styled-components";
import Menu from "./menu";
import TodoCard from "./todoCard";

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

const content = () => {
  return (
    <ContentWrap>
      <Menu />
      <ShowTodo>
        <TodoCard
          color="#967A6D"
          todoContent="투두 리스트 작성"
          date="2021.07.10"
        />
        <TodoCard
          color="#A7C4DA"
          todoContent="학교갔다가 잠자기"
          date="2021.07.10"
        />
        <TodoCard
          color="#E5BBB4"
          todoContent="수업 자료 만들기"
          date="2021.07.10"
        />
        <TodoCard
          color="#967A6D"
          todoContent="10시전에 일어나기"
          date="2021.07.10"
        />
        <TodoCard
          color="#E4D8D3"
          todoContent="알고리즘 과제하기"
          date="2021.07.10"
        />
        <TodoCard
          color="#E5BBB4"
          todoContent="그리디 알고리즘 공부하기"
          date="2021.07.10"
        />
        <TodoCard
          color="#E4D8D3"
          todoContent="세계 문화와 기독교 발표 준비하기"
          date="2021.07.10"
        />
        <TodoCard
          color="#818D90"
          todoContent="중국어 워크북 P.26~29"
          date="2021.07.10"
        />
        <TodoCard color="#A7C4DA" todoContent="CBT 신청" date="2021.07.10" />
      </ShowTodo>
    </ContentWrap>
  );
};

export default content;
