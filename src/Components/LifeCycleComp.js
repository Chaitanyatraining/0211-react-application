import React, { Component } from 'react'

export class LifeCycleComp extends Component {

    //constructor
    constructor(props){
        super(props)
        console.log("Constructor executed")
    }

    state = {
        userData : []
    }

    componentDidMount(){
      this.getUserData();
    }

    getUserData = async ()=>{
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      this.setState({userData:data})
    }

    // static getDerievedStateFromProps
        static getDerivedStateFromProps(){
            console.log("static getDerivedStateFromProps executed")
            return null;
        }

  render() {
    return (
      <div>
        <h2>LifeCycle Methods</h2>
        <table class="table table-striped">
        <thead class="table-primary">
          <th>id</th>
          <th>name</th>
          <th>username</th>
          <th>email</th>
        </thead>
        <tbody>
            {
              this.state.userData.length>0 ? (
                  this.state.userData.map((user)=>(
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
      </div>
    )
  }
}

export default LifeCycleComp