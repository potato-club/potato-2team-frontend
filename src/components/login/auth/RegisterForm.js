import React, { useRef } from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

const RegisterForm = () => {
  const history = useHistory();
  const { register, handleSubmit, watch, errors } = useForm();
  const password = useRef();
  password.current = watch("password");


  const onSubmit = async(data) => {
    // axios로 넘어가는 데이터 처리예정 
    // 처리 후 엔드포인트 설정 및 로그인 리턴
  try {
    await axios.post('https://gamsung-coding.shop/api/v1/join', {
        name: data.name,
        email: data.email,
        birth: data.birth,
        password: data.password
      })
    history.push('/')
  } catch (e) {
    console.log("에러발생!");
  }
  };

  return (
  
      <form onSubmit={handleSubmit(onSubmit)}>
      
      <PageExplans>회원가입</PageExplans>
      <Label>이름</Label>
      <Input 
        name="name" 
        placeholder="이름을 입력해 주세요." 
        ref={register({ required: true, maxLength: 10 })}
        />
        <Message>
        {errors.name && errors.name.type === "required"
          && <p>⚠ 이름은 필수 입니다. </p>}
        {errors.name && errors.name.type === "maxLength"
          && <p>⚠ 최대 입력입니다. </p>} 
       </Message>
        
      
      <Label>생년월일</Label>
      <Input 
        type="date" 
        name="birth" 
        placeholder="생년월일을 입력해주세요."
        ref={register({ required: true })}
         />
        <Message>
          {errors.birth && errors.birth.type === "required"
            && <p>⚠ 생년월일은 필수 입니다. </p>}
        </Message>
     
      <Label>이메일</Label>
      <Input 
        name="email" 
        type="email"
        placeholder="이메일을 입력해주세요." 
        ref={register({ required: true, pattern: /^\S+@\S+$/i })}
        />
      <Message>
       {errors.email && <p>⚠ 옳바르지 않은 이메일 형식입니다. </p>}
      </Message>
      
      <Label>비밀번호</Label>
      <Input
        name="password"
        type="password"
        placeholder="비밀번호를 입력해주세요."
        ref={register({ required: true, minLength: 6 })}
      />
      <Message>
        {errors.password && errors.password.type === "required"
         && <p>⚠ 필수 입력 항목입니다.</p>}
        {errors.password && errors.password.type === "minLength"
          && <p>⚠ 패스워드는 최소 6자리 이상입니다. </p>}
      </Message>

      <Label>비밀번호 확인</Label>
      <Input
        name="password_confirm"
        type="password"
        placeholder="비밀번호를 다시 입력해주세요."
        ref={register({
          required: true,
          validate: (value) =>
            value === password.current
        })}
      />
      <Message>
        {errors.password_confirm && errors.password_confirm.type === "required"
          && <p>⚠ 필수 입력 항목입니다. </p>}
        {errors.password_confirm && errors.password_confirm.type === "validate"
          && <p>⚠ 비밀번호가 같지 않습니다. </p>} 
      </Message>

      <RegisterButton type="submit">회원가입</RegisterButton>
      <Login to="/">로그인</Login>
     
      </form>
    
  );
};

export default RegisterForm;


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
  width: 370px;
  padding: 15px 20px;
  background: #f9f9fa;
  font-size: 20px;
  margin-bottom: 5px;
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
  width: 410px;
  padding: 11px 13px;
  color: white;
  font-weight: 600;
  text-transform: uppercase;
  display: flow-root;
  background: #ffd5d9;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  margin-top: 0.6rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-out;
  margin-top: 10px;
  margin-bottom: 15px;
  `;

const Label = styled.div`
  font-size: 1rem;
  margin-bottom: 0.25rem;
  color: grey;
  padding: 5px;
  margin-top: 5px;
`;

const Message = styled.p`
  color: #bf1650;
`;

const Login = styled(Link)`
  float: right; 
  color: grey;
  text-decoration: none;
`;
