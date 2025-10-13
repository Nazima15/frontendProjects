import React, { useMemo } from "react";

function Factorial({ n, isPolite }) {
    // 반복문으로 팩토리얼 계산
    const calculateFactorial = (num) => {
        console.log("팩토리얼 함수 실행됨: ", num);
        if (num <= 0) return 1;
        let result = num;
        for (let i = num - 1; i >= 1; i--) {
            result *= i;
        }
        return result;
    };

    // n이 바뀔 때만 계산
    const result = useMemo(() => calculateFactorial(n), [n]);

    return (
        <>
            <h3>{n}! = {result}</h3>
            <h4>{isPolite ? '입니다' : '이다'}</h4>
        </>
    );
}

export default Factorial;
