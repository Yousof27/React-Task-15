import React, { useState, useMemo } from 'react';

function Hook() {

    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    const handleClick1 = () => {
        setCount1(p => p + 1);
    }

    const handleClick2 = () => {
        setCount2(p => p + 1);
    }

    const isEven = useMemo(() => {
        let i = 0;
        while (i < 2000000000) i++;
        return (count1 % 2 === 0);
    }, [count1])

    return (
        <>
            <div><button onClick={handleClick1}>{count1}</button><span>{isEven ? 'Even' : 'Odd'}</span></div>
            <div><button onClick={handleClick2}>{count2}</button></div>
        </>
    )
}

export default Hook