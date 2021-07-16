import React from "react";
import styled from "styled-components";
import {
  AiOutlineCheckCircle,
  AiOutlineEdit,
  AiOutlineDelete,
} from "react-icons/ai";

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

const todoCard = ({ color, todoContent, date }) => {
  return (
    <CardWrap color={color}>
      <TopWrap>
        <IConButton>
          <AiOutlineEdit size="24" />
        </IConButton>
        <IConButton>
          <AiOutlineCheckCircle size="24" />
        </IConButton>
      </TopWrap>
      <MiddleWarp>{todoContent}</MiddleWarp>
      <BottomWarp>
        <CreateDate>{date}</CreateDate>
        <IConButton>
          <AiOutlineDelete size="24" />
        </IConButton>
      </BottomWarp>
    </CardWrap>
  );
};

export default todoCard;
