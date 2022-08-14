import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import { apiSignUp } from "apis/auth";
import { validateEmail, validatePassword } from "utils/validate";

import styled from "styled-components";
import theme from "styles/theme";
import { SectionTitle } from "components/layout/SectionTitle";
import { BasicButton, ColorButton } from "components/ButtonSet";
import { BasicInput } from "components/InputSet";

export default function SignUp() {
  const navigate = useNavigate();

  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [inputPasswordConfirm, setInputPasswordConfirm] = useState("");

  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [isValidPasswordConfirm, setIsValidPasswordConfirm] = useState(false);

  const [alertValidEmail, setAlertValidEmail] = useState("");
  const [alertValidPassword, setAlertValidPassword] = useState("");
  const [alertValidPasswordConfirm, setAlertValidPasswordConfirm] =
    useState("");

  const isValidAll = useMemo(() => {
    return isValidEmail && isValidPassword && isValidPasswordConfirm;
  }, [isValidEmail, isValidPassword, isValidPasswordConfirm]);

  const handleInputEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputEmail(e.target.value);

    if (!validateEmail(e.target.value)) {
      setAlertValidEmail("이메일 형식이 올바르지 않아요 :(");
      setIsValidEmail(false);
    } else {
      setAlertValidEmail("");
      setIsValidEmail(true);
    }
  };

  const handleInputPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputPassword(e.target.value);

    if (!validatePassword(e.target.value)) {
      setAlertValidPassword("비밀번호는 8자 이상 입력해주세요!");
      setIsValidPassword(false);
    } else {
      setAlertValidPassword("");
      setIsValidPassword(true);
    }
  };

  const handleInputPasswordConfirm = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInputPasswordConfirm(e.target.value);
  };

  useEffect(() => {
    if (inputPassword !== inputPasswordConfirm) {
      setAlertValidPasswordConfirm(
        "비밀번호가 일치하지 않아요 :( 다시 입력해주세요!"
      );
      setIsValidPasswordConfirm(false);
    } else {
      setAlertValidPasswordConfirm("");
      setIsValidPasswordConfirm(true);
    }
  }, [inputPassword, inputPasswordConfirm]);

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
        onChange={handleInputEmail}
        placeholder="이메일"
      />
      <ValidAlert>{alertValidEmail}</ValidAlert>

      <BasicInput
        type="password"
        value={inputPassword}
        onChange={handleInputPassword}
        placeholder="비밀번호"
      />
      <ValidAlert>{alertValidPassword}</ValidAlert>

      <BasicInput
        type="password"
        value={inputPasswordConfirm}
        onChange={handleInputPasswordConfirm}
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
