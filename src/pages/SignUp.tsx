import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import { apiSignUp } from "apis/auth";
import { validateEmail, validatePw } from "utils/validate";

import styled from "styled-components";
import theme from "styles/theme";
import { SectionTitle } from "components/layout/SectionTitle";
import { BasicButton, ColorButton } from "components/ButtonSet";
import { BasicInput } from "components/InputSet";

export default function SignUp() {
  const navigate = useNavigate();

  const [inputEmail, setInputEmail] = useState("");
  const [inputPw, setInputPw] = useState("");
  const [inputPwConfirm, setInputPwConfirm] = useState("");

  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPw, setIsValidPw] = useState(false);
  const [isValidPwConfirm, setIsValidPwConfirm] = useState(false);

  const [textValidEmail, setTextValidEmail] = useState("");
  const [textValidPw, setTextValidPw] = useState("");
  const [textValidPwConfirm, setTextValidPwConfirm] = useState("");

  const isValidAll = useMemo(() => {
    return isValidEmail && isValidPw && isValidPwConfirm;
  }, [isValidEmail, isValidPw, isValidPwConfirm]);

  const handleInputEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputEmail(e.target.value);

    if (!validateEmail(e.target.value)) {
      setTextValidEmail("이메일 형식이 올바르지 않아요 :(");
      setIsValidEmail(false);
    } else {
      setTextValidEmail("");
      setIsValidEmail(true);
    }
  };

  const handleInputPw = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputPw(e.target.value);

    if (!validatePw(e.target.value)) {
      setTextValidPw("비밀번호는 8자 이상 입력해주세요!");
      setIsValidPw(false);
    } else {
      setTextValidPw("");
      setIsValidPw(true);
    }
  };

  const handleInputPwConfirm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputPwConfirm(e.target.value);
  };

  useEffect(() => {
    if (inputPw !== inputPwConfirm) {
      setTextValidPwConfirm("비밀번호가 일치하지 않아요 :( 다시 입력해주세요!");
      setIsValidPwConfirm(false);
    } else {
      setTextValidPwConfirm("");
      setIsValidPwConfirm(true);
    }
  }, [inputPw, inputPwConfirm]);

  const signUp = () => {
    apiSignUp({ email: inputEmail, password: inputPw })
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
      <StyledText>{textValidEmail}</StyledText>

      <BasicInput
        type="password"
        value={inputPw}
        onChange={handleInputPw}
        placeholder="비밀번호"
      />
      <StyledText>{textValidPw}</StyledText>

      <BasicInput
        type="password"
        value={inputPwConfirm}
        onChange={handleInputPwConfirm}
        placeholder="비밀번호 확인"
      />
      <StyledText>{textValidPwConfirm}</StyledText>

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

const StyledText = styled.div`
  margin: ${(props) => props.theme.boxSize.micro} 0
    ${(props) => props.theme.boxSize.small} 0;
  font-size: ${(props) => props.theme.fontSize.small};
  color: ${(props) => props.theme.colors.red};
`;
