import React from "react";
import styled from "styled-components";

export const DoneContent = () => {
  return <ContentWrap />;
};

export default DoneContent;

const ContentWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  border: 2px solid #dddddd;
  border-radius: 0 0 32px 32px;
  height: 800px;
`;
