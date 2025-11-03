import React, { useState } from "react";
import Greeting from "./Greeting";

// 로그인 버튼 컴포넌트
function LoginButton(props) {
  return <button onClick={props.onClick}>Login</button>;
}

// 로그아웃 버튼 컴포넌트
function LogoutButton(props) {
  return <button onClick={props.onClick}>Logout</button>;
}

// 로그인 상태 관리 컴포넌트
function LoginControl() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 상태

  const handleLoginClick = () => {
    setIsLoggedIn(true);
  };

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  };

  // 조건부로 버튼 선택
  const button = isLoggedIn ? (
    <LogoutButton onClick={handleLogoutClick} />
  ) : (
    <LoginButton onClick={handleLoginClick} />
  );

  return (
    <div>
      <Greeting isLoggedIn={isLoggedIn} /> {/* 인사말 표시 */}
      {button} {/* 로그인/로그아웃 버튼 표시 */}
    </div>
  );
}

export default LoginControl;
