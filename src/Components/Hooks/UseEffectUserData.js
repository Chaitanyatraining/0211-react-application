import React, { useEffect, useState } from 'react'

function UseEffectUserData() {

    const [userData, setUserData] = useState([]);

    //componentDidMount, componentDidUpdate, componentWillUnmount
    // useEffect will have two arguments
    // 1-callback function
    // 2-dependancy array
    // if you are not passing a dependancy array, the useEffect will be called when the state is updated.


    // if you pass the dependancy array as an empty array, 
        // the useEffects will be called for the first time when the component is mounted on the DOM.

    useEffect(()=>{
        getUsersData();
    },[])

    const getUsersData = async ()=>{
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        setUserData(data);
    }


  return (
    <>
        <h2>UseEffectUserData</h2>
        <table class="table table-striped">
        <thead class="table-primary">
          <th>id</th>
          <th>name</th>
          <th>username</th>
          <th>email</th>
        </thead>
        <tbody>
            {
              userData.length>0 ? (
                 userData.map((user)=>(
                    <tr>
                      <td>{user.id}</td>
                      <td>{user.name}</td>
                      <td>{user.username}</td>
                      <td>{user.email}</td>
                    </tr>
                  ))
              ):<p>Loading...</p>
            }
        </tbody>
        </table>
    </>
  )
}

export default UseEffectUserData