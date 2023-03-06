
import React, { Component } from 'react'

class ClassComp extends Component {
    constructor(props){
        super(props);
    }

  render() {
    const {productName,price} = this.props;

    return (
      <div>
        <h2>ClassComp</h2>
        <p>The product Name is {productName} and price is {price}</p>
        <button onClick={this.getData}>Click here</button>
      </div>
    )
  }
}

export default ClassComp
