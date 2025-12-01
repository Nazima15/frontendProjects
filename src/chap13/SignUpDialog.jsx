import React from "react";
import Dialog from "./Dialog";

export default function SignUpDialog() {
  const [nickname, setNickname] = React.useState("");

  function handleChange(e) {
    setNickname(e.target.value);
  }

  function handleSignUp() {
    alert(`환영합니다, ${nickname}님!`);
  }

  return (
    <Dialog title="가입을 환영합니다!" message="닉네임을 입력해주세요!">
      <input value={nickname} onChange={handleChange} />
      <button onClick={handleSignUp}>가입하기</button>
    </Dialog>
  );
}
