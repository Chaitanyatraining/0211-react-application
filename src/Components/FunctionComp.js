import React from 'react'

function FunctionComp(props) {
    const {courseName, duration} = props;
    console.log(props)
  return (
    <div>
        <h2>FunctionComp</h2>
        <p>The Course Name is {courseName} and the duration is {duration}</p>
    </div>
  )
}

export default FunctionComp