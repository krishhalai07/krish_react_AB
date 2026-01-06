import React,{ Component} from "react";
class RenderCond extends Component{
    constructor(){
        super();
        this.state={
            isOn: false,
        };
    }
    
    toggle=()=>{
        this.setState({isOn:!this.state.isOn});
    }

    render(){
        return(
            <div align = "center" style={{backgroundColor: this.state.isOn ? 'skyblue' : 'white', }}>
            <button onClick={this.toggle}>
                {this.state.isOn ? "ON" : "OFF"}
            </button>
            <p>Status : {this.state.isOn ? "ON" : "OFF"}</p>
            </div>
        );         
    }
}

export default RenderCond;
