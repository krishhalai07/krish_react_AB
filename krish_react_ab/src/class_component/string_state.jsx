import React, { Component} from "react";
class StringState extends Component{
    constructor(){
        super();
        this.state={
            name:"",
            email:"",
            age:"",
        };
    }
    handleNameChange=(event)=>{
        this.setState({name:event.target.value});
    };
    handleEmailChange=(event)=>{
        this.setState({email:event.target.value});
    };
    handleAgeChange=(event)=>{
        this.setState({age:event.target.value});
    };

    consolelog=()=>{
        console.log(this.state.name);
        console.log(this.state.email);
        console.log(this.state.age);
    };
    render(){
        const {name,email,age}=this.state;
        return(
            <>
            <input type="text" 
            value={name}
             onChange={this.handleNameChange} />
            <input type="text" 
            value={email}
             onChange={this.handleEmailChange} />
            <input type="text" 
            value={age}
             onChange={this.handleAgeChange} />
             <button onClick={this.consolelog}>Submit</button>
            <h1>Name:{name}</h1>
            <h1>Email:{email}</h1>
            <h1>Age:{age}</h1>
      </>
        );
    }
}

export default StringState;