import './SignUp.css'
import React from 'react'
import md5 from 'md5';
import axios from 'axios';

class SignUp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name:'',
            birthday:'',
            country:'',
            password:'',
            mail:''
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
        .post("http://localhost/API/SignUp.php",JSON.stringify(this.state))
        .then(res => console.log(res))
        .catch(err => console.log(err));
        event.preventDefault();
    }
    

    render(){
        return(
            <>
            <button className='openSignUp'>SignUp</button>
            <div className="formPopUp">
                <h3>Sign Up</h3>
                <form onSubmit={this.handleSubmit} className='formContainer'>
                    <label>
                        Username:
                        <input type="text" value={this.state.name} onChange={this.handleName} className="inputBox"/>
                    </label>
                    <label>
                        Birthday:
                        <input type="date" value={this.state.birthday} onChange={this.handleBirthDay} className="inputBox"/>
                    </label>
                    <label>
                        Country:
                        <input type="country" value={this.state.country} onChange={this.handleCountry} className="inputBox"/>
                    </label>
                    <label>
                        Password:
                        <input type="password" value={this.state.password} onChange={this.handlePswd} className="inputBox"/>
                    </label>
                    <label>
                        Mail:
                        <input type="mail" value={this.state.mail} onChange={this.handleMail} className="inputBox"/>
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
            </>
        );
    }

}

export default SignUp;