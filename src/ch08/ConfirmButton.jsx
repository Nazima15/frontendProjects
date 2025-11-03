import React, { useState, useEffect } from "react";

function ConfirmButton() {
  const [isConfirmed, setIsConfirmed] = useState(false);

  // 컴포넌트가 처음 마운트될 때 항상 초기 상태로 설정
  useEffect(() => {
    setIsConfirmed(false);
  }, []);

  const handleConfirm = () => {
    setIsConfirmed(true);
  };

  return isConfirmed ? "확인됨" : <button onClick={handleConfirm}>확인</button>;
}

export default ConfirmButton;
