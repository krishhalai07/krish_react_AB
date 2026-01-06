import React,{Component} from "react";
import "./CustomCard.css";

class CustomCard extends Component{
    handleClick = () => {
        if (this.props.button === "View Profile") {
            const user = {
                name: this.props.name,
                email: this.props.email,
                image: this.props.image
            };
            this.props.onViewProfile(user);
        } else {
            alert(`Hello ${this.props.name}!`);
        }
    }

    render(){
        return(
            <div className="user-card">
                <img src={this.props.image} alt="nature" />
                <h3>{this.props.name}</h3>
                <p>{this.props.email}</p>
                <button onClick={this.handleClick}>{this.props.button}</button>
            </div>
        );
    }
}
export default CustomCard;