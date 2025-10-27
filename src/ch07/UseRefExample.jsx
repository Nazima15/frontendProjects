import { useState, useRef } from "react";

export default function UseRefExample() {
  const [count, setCount] = useState(0); 
  const inputRef = useRef(null);

  console.log("컴포넌트 렌더링됨. ref.current:", inputRef.current);

  const handleClick = () => {
    // ref로 DOM 값에 직접 접근해서 증가
    if (inputRef.current) {
      inputRef.current.value = Number(inputRef.current.value) + 1;
    }
  };

  //ref.current 가 가리키는 값을 input 노드 객체의 주소로 설정
  return (
    <>
      <h2>UseRefExample 컴포넌트: {count}</h2>

      <button onClick={() => setCount(count + 1)}>state 카운트 증가</button>

      <input ref={inputRef} defaultValue={count} type="text" />

      <button onClick={handleClick}>ref.current 값 증가</button>
    </>
  );
}
