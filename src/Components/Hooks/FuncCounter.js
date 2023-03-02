import React, { useState } from 'react'

function FuncCounter() {
    const [count,setCount] = useState(0);

    const handleIncrement = ()=>{
        setCount(count+1)
    }

    const handleDecrement = ()=>{
        setCount(count-1)
    }

    //nested functions
    // const productFunc = ()=>{
    //     const [products,setProducts] = useState();
    // }

    // conditions
    // if(true){
    //     const [products,setProducts] = useState();
    // }


    return (
        <>
            <h2>Counter App</h2>
            <h1>Count:{count}</h1>
            <button className='btn btn-primary me-2' onClick={handleIncrement} >Increment</button>
            <button className='btn btn-danger me-2' onClick={handleDecrement}>Decrement</button>

        </>
    )
}

export default FuncCounter