import React from "react";
import styled from "styled-components";

const CardWrap = styled.div`
  width: 200px;
  height: 160px;
  background-color: ${(props) => console.log("d", props.color)};
`;

const todoCard = () => {
  return <CardWrap>카드!</CardWrap>;
};

export default todoCard;
