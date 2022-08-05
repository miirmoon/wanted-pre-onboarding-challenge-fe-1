import { useEffect, useMemo, useState } from "react";
import { validateEmail, validatePw } from "utils/validate";

export default function SignUp() {
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

  const handleInputEmail = (e) => {
    setInputEmail(e.target.value);

    if (!validateEmail(e.target.value)) {
      setTextValidEmail("이메일 형식이 올바르지 않아요 :(");
      setIsValidEmail(false);
    } else {
      setTextValidEmail("");
      setIsValidEmail(true);
    }
  };

  const handleInputPw = (e) => {
    setInputPw(e.target.value);

    if (!validatePw(e.target.value)) {
      setTextValidPw("비밀번호는 8자 이상 입력해주세요!");
      setIsValidPw(false);
    } else {
      setTextValidPw("");
      setIsValidPw(true);
    }
  };

  const handleInputPwConfirm = (e) => {
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

  return (
    <section>
      <input
        type="text"
        value={inputEmail}
        onChange={handleInputEmail}
        placeholder="이메일"
      />
      <div>{textValidEmail}</div>

      <input
        type="password"
        value={inputPw}
        onChange={handleInputPw}
        placeholder="비밀번호"
      />
      <div>{textValidPw}</div>

      <input
        type="password"
        value={inputPwConfirm}
        onChange={handleInputPwConfirm}
        placeholder="비밀번호 확인"
      />
      <div>{textValidPwConfirm}</div>

      <button disabled={!isValidAll}>회원가입</button>
    </section>
  );
}
