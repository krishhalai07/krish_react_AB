import React,{ Component} from "react";
class ColourChange extends Component{
    constructor(){
        super();
        this.state={
            color:"white",
        };
    }
    
    changeColor=(color)=>{
        this.setState({color:color});
    }
    
    render(){
        return(
            <div style={{padding: '50px', textAlign: 'center'}}>
                
                <div style={{marginTop: '20px'}}>
                    <button onClick={() => this.changeColor('red')} style={{ backgroundColor: 'white', color: 'black'}}>Red</button>
                    <button onClick={() => this.changeColor('blue')} style={{ backgroundColor: 'white', color: 'black'}}>Blue</button>
                    <button onClick={() => this.changeColor('green')} style={{ backgroundColor: 'white', color: 'black'}}>Green</button>
                    <button onClick={() => this.changeColor('yellow')} style={{ backgroundColor: 'white', color: 'black'}}>Yellow</button>
                </div>
                 <h2><span style={{backgroundColor: this.state.color, padding: '2px'}}>Simple Text Area</span></h2>

            </div>

        );
    }
}

export default ColourChange;