import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  AiOutlineCheckCircle,
  AiOutlineEdit,
  AiOutlineDelete,
} from "react-icons/ai";
import { Palette } from "../../constants/defaultColor";

const TodoCard = ({ color, todoContent, date }) => {
  const [backgoundColor, setBackgoundColor] = useState("");

  useEffect(() => {
    if (color === "BLUE") {
      setBackgoundColor(Palette.BLUE[0]);
    } else if (color === "DEEP_BLUE") {
      setBackgoundColor(Palette.DEEP_BLUE[0]);
    } else if (color === "BROWN") {
      setBackgoundColor(Palette.BROWN[0]);
    } else if (color === "PINK") {
      setBackgoundColor(Palette.PINK[0]);
    } else if (color === "OATMEAL") {
      setBackgoundColor(Palette.OATMEAL[0]);
    }
  }, []);
  return (
    <CardWrap color={backgoundColor}>
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
