import React, { useState, useCallback } from "react"; // ✅ useCallbek → useCallback

function Parent() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState("light");

  // ✅ useCallback 문법 수정
  const handleClick = useCallback(() => {
    console.log("버튼 클릭됨");
  }, []); // ✅ [] ← 의존성 배열 (비어 있으면 함수가 한 번만 생성됨)

  return (
    <>
      <h2>
        Parent Component: {count}, 테마: {theme}
      </h2>

      {/* 테마 변경 버튼 */}
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        테마 변경
      </button>

      {/* 카운트 증가 버튼 */}
      <button onClick={() => setCount(count + 1)}>카운트 증가</button>

      {/* 🔽 Child 버튼 */}
      <button onClick={handleClick}>Child 버튼</button>

      {/* Child 컴포넌트 */}
      <Child value={count} />
    </>
  );
}

// ✅ React.memo 적용한 Child 컴포넌트
const Child = React.memo((props) => {
  console.log("Child 컴포넌트 렌더링됨");

  return (
    <>
      <h3>Child Component: {props.value}</h3>
    </>
  );
});

export default Parent;
