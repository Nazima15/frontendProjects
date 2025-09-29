import React, { useState, useEffect } from "react";

function Counter(props) {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState('counter 페이지');

  function handleClick() {
    setCount(count + 1);
    console.log(`${count}번 클릭했습니다`);
  }

  // title이 바뀔 때마다 document.title 업데이트
  useEffect(() => {
    document.title = title;
    return () => {document.title = 'Counter 사라짐';}
  }, [title]);

  return (
    <div>
      <p>총 {count} 번 클릭했습니다</p>
      <button onClick={handleClick}>클릭</button>
      <button onClick={() => setTitle(`${count}번 클릭했습니다`)}>제목 변경</button>
    </div>
  );
}

export default Counter;



