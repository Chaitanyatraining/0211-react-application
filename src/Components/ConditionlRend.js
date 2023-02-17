import React from 'react'

function ConditionlRend() {
    // const obj = {
    //     name: "chaitanya",
    //     email:"chaitanya@gmail.com"
    // }

    const age = 18;
    // if(age>= 18){
    //     return <p>you are eligible to vote</p>
    // }else{
    //     return <p>you are not eligible to vote</p>
    // } 

  return (
    <div>
        <h2>ConditionlRend</h2>
        {/* {obj} */}
        {
            age>=18 ? (
                <p>you are eligible to vote</p>
            ):(
                <p>you are not eligible to vote</p>
            )
        }
    </div>
  )
}

export default ConditionlRend