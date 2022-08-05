import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import { validateEmail } from "utils/validate";
import { apiLogin } from "apis/auth";

import styled from "styled-components";
import theme from "styles/theme";
import { SectionTitle } from "components/layout/SectionTitle";
import { ColorButton } from "components/ButtonSet";
import { BasicInput } from "components/InputSet";

export default function Login() {
  const navigate = useNavigate();

  const [inputEmail, setInputEmail] = useState("");
  const [inputPw, setInputPw] = useState("");

  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPw, setIsValidPw] = useState(false);

  const [textValidEmail, setTextValidEmail] = useState("");
  const [textValidPw, setTextValidPw] = useState("");

  const isValidAll = useMemo(() => {
    return isValidEmail && isValidPw;
  }, [isValidEmail, isValidPw]);

  const handleInputEmail = (e) => {
    setInputEmail(e.target.value);

    if (!validateEmail(e.target.value)) {
      setTextValidEmail("이메일을 입력해야 해요 :)");
      setIsValidEmail(false);
    } else {
      setTextValidEmail("");
      setIsValidEmail(true);
    }
  };

  const handleInputPw = (e) => {
    setInputPw(e.target.value);

    if (e.target.value) {
      setTextValidPw("");
      setIsValidPw(true);
    } else {
      setTextValidPw("비밀번호를 입력해주세요!");
      setIsValidPw(false);
    }
  };

  const moveToSignUp = () => {
    navigate("/signup");
  };

  const login = () => {
    apiLogin(inputEmail, inputPw)
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
        onChange={handleInputEmail}
        placeholder="이메일"
      />
      <StyledText>{textValidEmail}</StyledText>

      <BasicInput
        type="password"
        value={inputPw}
        onChange={handleInputPw}
        placeholder="비밀번호"
      />
      <StyledText>{textValidPw}</StyledText>

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

const StyledText = styled.div`
  margin: ${(props) => props.theme.boxSize.micro} 0
    ${(props) => props.theme.boxSize.small} 0;
  font-size: ${(props) => props.theme.fontSize.small};
  color: ${(props) => props.theme.colors.red};
`;
