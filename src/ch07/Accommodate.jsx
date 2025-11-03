import React, { useState, useEffect } from 'react';
import useCounter from './useCounter';

const MAX_CAPACITY = 10;

function Accommodate() {
  const [count, increment, decrement] = useCounter(0);
  const isFull = count >= MAX_CAPACITY;

  useEffect(() => {
    console.log('=================');
    console.log('useEffect is called');
    console.log(`isFull: ${isFull}`);
  }, [isFull]); // ✅ isFull이 바뀔 때만 실행

  useEffect(() => {
    console.log(`Current count value: ${count}`);
  }, [count]); // ✅ count가 바뀔 때 실행

  return (
    <div style={{ padding: 16 }}>
      <p>{`총 ${count}명 수용했습니다.`}</p>
      <button onClick={increment} disabled={isFull}>
        입장
      </button>
      <button onClick={decrement}>퇴장</button>

      {isFull && <p style={{ color: 'red' }}>정원이 가득찼습니다</p>}
    </div>
  );
}

export default Accommodate;
