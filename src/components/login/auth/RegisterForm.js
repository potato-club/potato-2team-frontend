import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const PageExplans = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  font-size: 20px;
  padding: 0 0 15px 0;
  font-weight: bold;
  color: currentcolor;
`;

const Input = styled.input`
  max-width: 100%;
  padding: 15px 20px;
  background: #f9f9fa;
  color: #f03d4e;
  margin-bottom: 0.9rem;
  border-radius: 4px;
  outline: 0;
  border: 1px solid rgba(245, 245, 245, 0.7);
  font-size: 14px;
  transition: all 0.3s ease-out;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.1);
  :focus,
  :hover {
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.15), 0 1px 5px rgba(0, 0, 0, 0.1);
  }
`;

const RegisterButton = styled.button`
  max-width: 100%;
  padding: 11px 13px;
  color: white;
  font-weight: 600;
  text-transform: uppercase;
  background: #ffd5d9;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  margin-top: 0.6rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-out;
`;

// 바로 밑에 좀 큰글씨로 회원가입! 이라고 적을 수 있는 방법 필요

const Label = styled.div`
  font-size: 1rem;
  margin-bottom: 0.25rem;
  color: grey;
`;

const Login = styled(Link)`
  margin-top: 1rem;
  text-align: right;
  color: grey;
`;

const RegisterForm = () => {
  return (
    <>
      <PageExplans>회원가입</PageExplans>
      <Label>이름</Label>
      <Input name="name" placeholder="이름을 입력해 주세요." />
      <Label>생년월일</Label>
      <Input type="date" name="birth" placeholder="생년월일을 입력해주세요." />
      <Label>이메일</Label>
      <Input name="email" placeholder="이메일을 입력해주세요." />
      <Label>비밀번호</Label>
      <Input
        name="pwd"
        type="password"
        placeholder="비밀번호를 입력해주세요."
      />
      <Label>비밀번호 확인</Label>
      <Input
        name="pwdcorrect"
        type="password"
        placeholder="비밀번호를 다시 입력해주세요."
      />
      <RegisterButton>회원가입</RegisterButton>
      <Login to="/">로그인</Login>
    </>
  );
};

export default RegisterForm;
