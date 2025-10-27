import { useRef } from "react";

function TextInputWithFocusButton() {
  // REF.CURRENT 값은 NULL로 초기화 되어 있다.
  const inputRef = useRef(null); // 객체 안에 {current: null} 저장됨

  const onButtonClick = () => {
    // inputRef.current가 가리키는 값은 input 노드 객체
    inputRef.current.focus();
  };

  // inputRef.current가 input 노드 객체의 주소를 참조
  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </div>
  );
}

export default TextInputWithFocusButton;
