import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import useInput from "hooks/useInput";

import { apiSignUp } from "apis/auth";
import { validateEmail, validatePassword } from "utils/validate";

import styled from "styled-components";
import theme from "styles/theme";
import { SectionTitle } from "components/layout/SectionTitle";
import { BasicInput } from "components/InputSet";
import { BasicButton, ColorButton } from "components/ButtonSet";

export default function SignUp() {
  const navigate = useNavigate();

  const [inputEmail, setInputEmail] = useInput("");
  const [inputPassword, setInputPassword] = useInput("");
  const [inputPasswordConfirm, setInputPasswordConfirm] = useInput("");

  const [alertValidEmail, setAlertValidEmail] = useState("");
  const [alertValidPassword, setAlertValidPassword] = useState("");
  const [alertValidPasswordConfirm, setAlertValidPasswordConfirm] =
    useState("");

  const isValidEmail = useMemo(() => {
    if (validateEmail(inputEmail)) {
      setAlertValidEmail("");
      return true;
    } else {
      setAlertValidEmail("이메일 형식이 올바르지 않아요 :(");
      return false;
    }
  }, [inputEmail]);

  const isValidPassword = useMemo(() => {
    if (validatePassword(inputEmail)) {
      setAlertValidPassword("");
      return true;
    } else {
      setAlertValidPassword("비밀번호는 8자 이상 입력해주세요!");
      return false;
    }
  }, [inputPassword]);

  const isValidPasswordConfirm = useMemo(() => {
    if (inputPassword !== inputPasswordConfirm) {
      setAlertValidPasswordConfirm(
        "비밀번호가 일치하지 않아요 :( 다시 입력해주세요!"
      );
    } else {
      setAlertValidPasswordConfirm("");
    }
  }, [inputPassword, inputPasswordConfirm]);

  const isValidAll = useMemo(() => {
    return isValidEmail && isValidPassword && isValidPasswordConfirm;
  }, [isValidEmail, isValidPassword, isValidPasswordConfirm]);

  const signUp = () => {
    apiSignUp({ email: inputEmail, password: inputPassword })
      .then((data) => {
        localStorage.setItem("token", data.token);
        navigate("/");
      })
      .catch((err) => {
        alert(err.response.data.details);
      });
  };

  const moveToLogin = () => {
    navigate("/auth");
  };

  return (
    <div>
      <SectionTitle>회원가입</SectionTitle>
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

      <BasicInput
        type="password"
        value={inputPasswordConfirm}
        onChange={setInputPasswordConfirm}
        placeholder="비밀번호 확인"
      />
      <ValidAlert>{alertValidPasswordConfirm}</ValidAlert>

      <ButtonBox>
        <ColorButton
          color={isValidAll ? theme.colors.blue : theme.colors.grey10}
          disabled={!isValidAll}
          onClick={signUp}
        >
          회원가입
        </ColorButton>
        <BasicButton onClick={moveToLogin}>
          이미 가입했다면? 로그인하러 가기
        </BasicButton>
      </ButtonBox>
    </div>
  );
}

const ButtonBox = styled.div`
  text-align: center;

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
