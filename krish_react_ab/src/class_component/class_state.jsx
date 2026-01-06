import React,{ Component} from "react";
class ClassState extends Component{
    constructor(){
        super();
        this.state={
            count:0,
            counter:10,
        };
    }
    increment=()=>{
        this.setState({count:this.state.count+1});
    }
    decrement=()=>{
        this.setState({counter:this.state.counter-1});
    }
    
    render(){
        return(
            <div>
                <h1>Count:{this.state.count}</h1>
                <button onClick={this.increment}>Increment</button>
                <h1>Counter:{this.state.counter}</h1>
                <button onClick={this.decrement}>Decrement</button>
            </div>
        );  
    }
}

export default ClassState;