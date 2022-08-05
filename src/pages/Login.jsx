import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { validateEmail } from "utils/validate";

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

      <button disabled={!isValidAll}>로그인</button>
      <button onClick={moveToSignUp}>회원가입하러 가기</button>
    </section>
  );
}
