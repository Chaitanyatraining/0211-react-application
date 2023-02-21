import React,{Component} from 'react'

class Counter extends React.Component{
    constructor(props){
        super(props)
       
        // this.state = {
        //     counter : 0,
        // }
    }

    state = {
        counter : 0
    }

    handleIncrement = ()=>{
        //never mutate the state directly
        // if you want to update the state then use setState
        this.setState({
            counter : this.state.counter + 1
        })
    }

    handleDecrement = ()=>{
        this.setState({
            counter:this.state.counter - 1
        })
    }

    render(){
        return(
            <div>
                <h2>Counter App</h2>
                <h1>Count:{this.state.counter}</h1>
                <button className='btn btn-primary me-2' onClick={this.handleIncrement}>Increment</button>
                <button className='btn btn-danger me-2' onClick={this.handleDecrement}>Decrement</button>
            </div>
        )
    }
}

export default Counter