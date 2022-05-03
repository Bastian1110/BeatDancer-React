import React from "react";
import axios from "axios";
import Popup from "reactjs-popup";

import './SignUp.css'


class SignUp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name:'',
            birthday:'',
            country:'',
            password:'',
            mail:'',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleName = this.handleName.bind(this);
        this.handlePswd = this.handlePswd.bind(this);
        this.handleBirthDay = this.handleBirthDay.bind(this);
        this.handleCountry = this.handleCountry.bind(this);
        this.handleMail = this.handleMail.bind(this);
    }

    handleName(event){
        this.setState({name: event.target.value});
    }

    handlePswd(event){
        this.setState({password: event.target.value});
    }

    handleBirthDay(event){
        this.setState({birthday: event.target.value});
    }

    handleCountry(event){
        this.setState({country: event.target.value});
    }

    handleMail(event){
        this.setState({mail: event.target.value});
    }
    handleSubmit(event){
        axios
        .post("http://157.245.9.203/API/SignUp.php",JSON.stringify(this.state))
        .then(res => console.log(res.data))
        .catch(err => console.log(err));
        event.preventDefault();
    }
    

    render(){
        return(
            <Popup trigger={<button className="signUpButton"> Sign Up </button>} modal>
                <div className="signUpContainer">
                    <h1>Sign Up</h1>
                    <form className="signUpForm" onSubmit={this.handleSubmit}>
                        <label className="signUpLabel">
                            Username:
                            <input type="text" 
                               value={this.state.name} 
                               onChange={this.handleName} 
                               className="signInputBox"
                               placeholder='CuteCat22'
                            />
                        </label>
                        <label className="signUpLabel">
                            Birthday:
                            <input 
                                type="date" 
                                value={this.state.birthday} 
                                onChange={this.handleBirthDay} 
                                className="signInputBox"
                            />
                        </label>
                        <label className="signUpLabel">
                            Country:
                            <input type="country" 
                               value={this.state.country} 
                               onChange={this.handleCountry} 
                               className="signInputBox"
                               placeholder='Wonderland'
                            />
                        </label>
                        <label className="signUpLabel">
                            Password:
                            <input type="password" 
                               value={this.state.password} 
                               onChange={this.handlePswd} 
                               className="signInputBox"
                               placeholder='Difficult123'
                            />
                        </label>
                        <label className="signUpLabel">
                            Mail:
                            <input type="mail" 
                               value={this.state.mail} 
                               onChange={this.handleMail} 
                               className="signInputBox"
                               placeholder='Katsby@miau.com'
                            />
                        </label>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </Popup>
        );
    }

}

export default SignUp;