import React, { Component } from 'react'

export class Pagination extends Component {

    state={
        UserData: [],
        pageNumber :0
    }

    componentDidMount(){
    this.getDummyUserData();
    }

    handleBtnClick = (num)=>{
        this.setState({pageNumber:num})
    }

    componentDidUpdate(prevProps,prevState){
      //update stragery
      //when the state are props is updated (componentDidupdate will be called)

      if(prevState.pageNumber !== this.state.pageNumber){
        this.getDummyUserData();
      }
    }

    getDummyUserData = async () =>{
        const response = await fetch(`https://dummyapi.io/data/v1/user?page=${this.state.pageNumber}&limit=10`,{
            method:'GET',
            headers:{
                'app-id':"633e33e98efd49504c9c7643"
            }            
        });
        const {data} = await response.json();
        // console.log(data)
        this.setState({UserData:data})
    }

  render() {
    return (
      <div>
        <h2>Pagination</h2>
        <div>
          {this.state.UserData.length>0 ? (
            <div className='container'>
              <div className='row'>
                {this.state.UserData.map((user)=>(
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
           onClick={()=>{this.handleBtnClick(num)}}>{num}</button>
        ))}
      </div>
    )
  }
}

export default Pagination