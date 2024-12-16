

import React, {useState} from 'react';



function Counter() {

    const [count, setCount] = useState(0);



    const handleCounter = () => {
        setCount(count + 1);
    }


    return (
        <>
            <h1>Counter</h1>
            <button onClick={handleCounter}>+</button>
            <h2>{count}</h2>
        </>
    )
}

export default Counter;