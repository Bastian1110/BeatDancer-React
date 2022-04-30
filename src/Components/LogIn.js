import React from "react";
import axios from "axios";
import Popup from "reactjs-popup";

import './LogIn.css'

class LogIn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name : '',
            password : ''
        }
        this.handleName = this.handleName.bind(this);
        this.handlePswd = this.handlePswd.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleName(event){
        this.setState({name: event.target.value});
    }

    handlePswd(event){
        this.setState({password: event.target.value});
    }

    handleSubmit(event){
        axios
        .post("http://localhost/API/LogIn.php",JSON.stringify(this.state))
        .then(res => console.log(res))
        .catch(err => console.log(err));
        event.preventDefault();
    }

    render(){
        return(
            <Popup trigger={<button className="logInButton"> Log In </button>} modal>
                <div className="logInContainer">
                    <h1>Log In</h1>
                    <form className="logInForm" onSubmit={this.handleSubmit}>
                        <label className="logInLabel">
                            Usename: 
                            <input type="text" 
                               value={this.state.name} 
                               onChange={this.handleName} 
                               className="logInputBox"
                               placeholder='CuteCat22'
                            />
                        </label>
                        <label className="logInLabel">
                            Password: 
                            <input type="password" 
                               value={this.state.password} 
                               onChange={this.handlePswd} 
                               className="logInputBox"
                               placeholder='Difficut123'
                            />
                        </label>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </Popup>
        );
    }

}
export default LogIn;