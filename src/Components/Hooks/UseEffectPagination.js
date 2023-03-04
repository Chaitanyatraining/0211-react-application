import React, { useEffect, useState } from 'react'

function UseEffectPagination() {

    const [userData,setUserData] = useState([]);
    const [pageNumber,setPageNumber] = useState(0);

    useEffect(()=>{
        getDummyUserData();
    },[pageNumber])

    const getDummyUserData = async () =>{
        const response = await fetch(`https://dummyapi.io/data/v1/user?page=${pageNumber}&limit=10`,{
            method:'GET',
            headers:{
                'app-id':"633e33e98efd49504c9c7643"
            }            
        });
        const {data} = await response.json();
        setUserData(data);
    }

  return (
    <>
        <h2>UseEffectPagination</h2>
        <div>
          {userData.length>0 ? (
            <div className='container'>
              <div className='row'>
                {userData.map((user)=>(
                  <div className='col-md-6 mt-3'>
                   <div class="card" >
                      <div className='row'>
                        <div className='col-md-4'>
                          <img className='m-2' src={user.picture} alt={user.firstName} />
                        </div>
                        <div className='col-md-8'>
                          <h4>{user.id}</h4>
                          <h5>{user.firstName}{user.lastName}</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : <p>Loading...</p> }
        </div>

        {[1,2,3,4,5,6,7,8,9].map((num)=>(
          <button className='btn btn-primary m-3'
           onClick={()=>{setPageNumber(num)}}>{num}</button>
        ))}
    </>
  )
}

export default UseEffectPagination