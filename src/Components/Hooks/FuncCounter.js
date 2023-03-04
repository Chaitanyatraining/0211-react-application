import React, { useEffect, useState } from 'react'

function FuncCounter() {
    const [count,setCount] = useState(0);
    const [screenWidth,setScreenWidth] = useState(window.screen.width) 

    const handleIncrement = ()=>{
        setCount(count+1)
    }

    const handleDecrement = ()=>{
        setCount(count-1)
    }

    const actualWidth = ()=>{
        // console.log(window.innerWidth)
        setScreenWidth(window.innerWidth)
    }

    useEffect(()=>{
        console.log("add event")
        window.addEventListener("resize",actualWidth);

        return ()=>{
            console.log("remove event")
            window.removeEventListener("resize",actualWidth)
        }
    })

   
    

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

            <h2 className='mt-5'>screenWidth : {screenWidth}</h2>
        </>
    )
}

export default FuncCounter