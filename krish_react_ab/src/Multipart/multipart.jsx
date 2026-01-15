import React,{Component} from "react";
class Multipart extends Component{
    constructor(){
        super();
        this.state={
            t1:"",
            t2:"",
            t3:"",
            t4:"",
            t5:"",
            t6:"",
            t7:"",
            t8:"",
            t9:"",
            index:0,

        };
    }
    
    render(){
        const {t1, t2, t3, t4, t5, t6, t7, t8, t9, index} = this.state;
        return(
            <div>
                <div style={{display: index===0 ? "" : "none"}}>
                <h1>Part1</h1>
                <input 
                type="text" 
                name="text1" 
                placeholder="text1"
                value={t1}
                onChange={(e)=>{
                    this.setState({t1: e.target.value})
                }} />
                <br/><br/>
                <input 
                type="text" 
                name="text2" 
                placeholder="text2" 
                value={t2}
                onChange={(e)=>{
                    this.setState({t2: e.target.value})
                }} />
                <br/><br/>
                <input 
                type="text" 
                name="text3"
                placeholder="text3"
                value={t3}
                onChange={(e)=>{
                    this.setState({t3: e.target.value})
                }} />
                
                <br/><br/>

                <div>Text 1: {t1}</div>
                <div>Text 2: {t2}</div>
                <div>Text 3: {t3}</div>
                </div>
                <div style={{display: index===1 ? "" : "none"}}>
                <h1>Part2</h1>
                Gender :
                <input 
                type="radio" 
                name="radio1" 
                value="Male"
                onChange={(e)=>{
                    this.setState({t4: e.target.value})
                }} />Male
                <input 
                type="radio" 
                name="radio1" 
                value="Female"
                onChange={(e)=>{
                    this.setState({t4: e.target.value})
                }} />Female
                <input 
                type="radio" 
                name="radio1" 
                value="Other"
                onChange={(e)=>{
                    this.setState({t4: e.target.value})
                }} />Other
              
                <br/><br/>
                city :
                <select 
                name="dropdown1" 
                value={t5}
                onChange={(e)=>{
                    this.setState({t5: e.target.value})
                }}>
                    <option value="">Select City</option>
                    <option value="New York">rajkot</option>
                    <option value="London">bhuj</option>
                    <option value="Tokyo">ahmedabad</option>
                    <option value="Paris">surat</option>
                    <option value="Mumbai">morbi</option>
                </select>
                <br/><br/>
                Branch :
                <input 
                type="checkbox" 
                name="branch" 
                value="CE"
                onChange={(e)=>{
                    this.setState({t6: e.target.checked ? e.target.value : ""})
                }}
                />CE
                <input 
                type="checkbox" 
                name="branch" 
                value="BCA"
                onChange={(e)=>{
                    this.setState({t6: e.target.checked ? e.target.value : ""})
                }} />BCA
                <input 
                type="checkbox" 
                name="branch" 
                value="IT"
                onChange={(e)=>{
                    this.setState({t6: e.target.checked ? e.target.value : ""})
                }} />IT

                <br/><br/>

                <div>Text 4: {t4}</div>
                <div>Text 5: {t5}</div>
                <div>Text 6: {t6}</div>
                </div>
                <div style={{display: index===2 ? "" : "none"}}>
                <h1>Part3</h1>
                Colour:
                <input 
                 type="color"
                    name="color1"
                    value={t7}
                    onChange={(e)=>{
                        this.setState({t7: e.target.value})
                    }}
                 />
                <br/><br/>
                Date:
                <input 
                type="date" 
                name="date1" 
                value={t8}
                onChange={(e)=>{
                    this.setState({t8: e.target.value})
                }} />
                <br/><br/>
                About:
                <input 
                type="textarea" 
                name="text9"
                placeholder="Acout Yourself"
                value={t9}
                onChange={(e)=>{
                    this.setState({t9: e.target.value})
                }} />
                
                <br/><br/>
                
                <div>Text 7: {t7}</div>
                <div>Text 8: {t8}</div>
                <div>Text 9: {t9}</div>
                </div>
                <button onClick={() =>{
                    if (index<2){
                        this.setState({index: index + 1})
                    }else{
                        alert("No more next")
                    }

                } }>Next</button>
                <button onClick={() => {
                    if (index>=1){
                        this.setState({index: index - 1})
                    }else{
                        alert("No more previous")
                    }
                 }}>Previous</button>
            </div>
        );
    }
}
export default Multipart;