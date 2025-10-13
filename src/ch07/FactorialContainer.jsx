import React from "react";
import Factorial from "./Factorial";

function FactorialContainer() {
    const [n, setN] = React.useState(10);
    const [isPolite, setIsPolite] = React.useState(true);

    return (
        <>
            <label>n: </label>
            <input type="number" value={n} onChange={(e) => setN(Number(e.target.value))} />
            
            <button onClick={() => setIsPolite(!isPolite)}>
                {isPolite ? '정중하게' : '무례하게'}
            </button>

            <Factorial n={n} isPolite={isPolite}/>
        </>
    );
}

export default FactorialContainer;
