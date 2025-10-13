import React, { useState } from "react";
import Counter from "./Counter"; // Counter.jsx 파일 필요

function CounterContainer() {
    const [isShow, setIsShow] = useState(false);

    return (
        <div>
            <button onClick={() => setIsShow(!isShow)}>
                {isShow ? '숨기기' : '보이기'}
            </button>

            {isShow && <Counter />}
        </div>
    );
}

export default CounterContainer;
