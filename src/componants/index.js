import { Component } from "react";
import './index.css'
class Counter extends Component{
state = {count : 0}
OnIncrease=()=>{
this.setState((prevState)=>
    ({count:prevState.count+1}))
}
OnDecrement=()=>{
    this.setState((prevState)=>({count:prevState.count-1}))
}
render(){
    const {count}=this.state
    return (
        <div className="bgContainer">
        <div className="Containar">
            <h1 className="count">conter:{count}</h1>
            <button className="btnIncre" onClick={this.OnIncrease}>Increase</button>
            <button className="btnDec" onClick={this.OnDecrement}>Decrease</button>
        </div>
        </div>
    )
}
}
export default Counter