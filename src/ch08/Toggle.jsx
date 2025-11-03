import { useState } from 'react';

function Toggle(props) {
  const [isToggled, setIsToggled] = useState(true);

  function handleClick() {
    setIsToggled(!isToggled); // 상태를 반전
    console.log("버튼이 클릭되었습니다!");
  }

  return (
    <>
      <button onClick={handleClick}>
        {isToggled ? '켜기' : '끄기'}
      </button>
    </>
  );
}

export default Toggle;
