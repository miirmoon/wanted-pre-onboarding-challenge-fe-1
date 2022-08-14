import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import { validateEmail } from "utils/validate";
import { apiLogin } from "apis/auth";
import useInput from "hooks/useInput";

import styled from "styled-components";
import theme from "styles/theme";
import { SectionTitle } from "components/layout/SectionTitle";
import { ColorButton } from "components/ButtonSet";
import { BasicInput } from "components/InputSet";

export default function Login() {
  const navigate = useNavigate();

  const [inputEmail, setInputEmail] = useInput("");
  const [inputPassword, setInputPassword] = useInput("");

  const [alertValidEmail, setAlertValidEmail] = useState("");
  const [alertValidPassword, setAlertValidPassword] = useState("");

  const isValidEmail = useMemo(() => {
    if (validateEmail(inputEmail)) {
      setAlertValidEmail("");
      return true;
    } else {
      setAlertValidEmail("이메일을 입력해야 해요 :)");
      return false;
    }
  }, [inputEmail]);

  const isValidPassword = useMemo(() => {
    if (inputPassword) {
      setAlertValidPassword("");
      return true;
    } else {
      setAlertValidPassword("비밀번호를 입력해주세요!");
      return false;
    }
  }, [inputPassword]);

  const isValidAll = useMemo(() => {
    return isValidEmail && isValidPassword;
  }, [isValidEmail, isValidPassword]);

  const moveToSignUp = () => {
    navigate("/signup");
  };

  const login = () => {
    apiLogin({ email: inputEmail, password: inputPassword })
      .then((data) => {
        localStorage.setItem("token", data.token);
        navigate("/");
      })
      .catch((err) => {
        alert(err.response.data.details);
      });
  };

  return (
    <div>
      <SectionTitle>로그인</SectionTitle>
      <BasicInput
        type="text"
        value={inputEmail}
        onChange={setInputEmail}
        placeholder="이메일"
      />
      <ValidAlert>{alertValidEmail}</ValidAlert>

      <BasicInput
        type="password"
        value={inputPassword}
        onChange={setInputPassword}
        placeholder="비밀번호"
      />
      <ValidAlert>{alertValidPassword}</ValidAlert>

      <ButtonBox>
        <ColorButton
          color={isValidAll ? theme.colors.blue : theme.colors.grey10}
          disabled={!isValidAll}
          onClick={login}
        >
          로그인
        </ColorButton>
        <ColorButton color={theme.colors.red} onClick={moveToSignUp}>
          회원가입하러 가기
        </ColorButton>
      </ButtonBox>
    </div>
  );
}

const ButtonBox = styled.div`
  ${ColorButton} {
    width: 100%;
    margin-bottom: ${(props) => props.theme.boxSize.micro};
    padding: ${(props) => props.theme.boxSize.micro};
    font-size: ${(props) => props.theme.fontSize.normal};
  }
`;

const ValidAlert = styled.div`
  margin: ${(props) => props.theme.boxSize.micro} 0
    ${(props) => props.theme.boxSize.small} 0;
  font-size: ${(props) => props.theme.fontSize.small};
  color: ${(props) => props.theme.colors.red};
`;
