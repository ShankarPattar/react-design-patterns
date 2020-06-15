import React, { useState } from "react";
import styled from "styled-components";
import { Input } from "./Input";

const PassworInpuWrapper = styled.div`
  display: flex;
  ~ div {
    margin-bottom: 8px;
  }
`;

const PasswordInputStyled = styled(Input).attrs(() => ({
  type: "password",
  placeholder: "password here"
}))`
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`;

const ToggleButton = styled.div`
  height: 48px;
  border: 1px soild #eee;
  box-sizing: border-box;
  font-size: 0.9em;
  display: flex;
  padding: 8px;
  border-left: 0;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  background: white;
  font-weight: bold;
  cursor: pointer;
  user-select: select none;
  color: black;
`;

export function PasswordInput(props) {
  const [showPassword, setShowPassword] = useState(true);

  return (
    <>
      <PassworInpuWrapper>
        <PasswordInputStyled {...props} />
        <ToggleButton onClick={() => setShowPassword(s => !s)}>
          {showPassword ? "Hide" : "Show"}
        </ToggleButton>
      </PassworInpuWrapper>
      <div>{showPassword ? props.value : ""}</div>
    </>
  );
}
