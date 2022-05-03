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
                <div className="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
                    <section>
                    <h2 className="font-bold text-2xl">Sign Up</h2>
                    <p className="text-gray-300 pt-2">Please create account to join the club!</p>
                    </section>

                    <section className="mt-2">
                    <form className="flex flex-col" onSubmit={this.handleSubmit}>
                        <div className="mb-2 pt-1 rounded bg-gray-200">
                        <label className="block text-gray-700 text-sm font-bold mb-2 ml-3">
                            Username:
                            <input type="text" 
                               value={this.state.name} 
                               onChange={this.handleName} 
                               className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-2 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3"
                               placeholder='CuteCat22'
                            />
                        </label>
                        </div>
                        <div className="mb-2 pt-1 rounded bg-gray-200">
                        <label className="block text-gray-700 text-sm font-bold mb-2 ml-3">
                            Birthday:
                            <input 
                                type="date" 
                                value={this.state.birthday} 
                                onChange={this.handleBirthDay} 
                                className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3"
                            />
                        </label>
                        </div>
                        <div className="mb-2 pt-1 rounded bg-gray-200">
                        <label className="block text-gray-700 text-sm font-bold mb-2 ml-3">
                            Country:
                            <input type="country" 
                               value={this.state.country} 
                               onChange={this.handleCountry} 
                               className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3"
                               placeholder='Wonderland'
                            />
                        </label>
                        </div>
                        <div className="mb-2 pt-1 rounded bg-gray-200">
                        <label className="block text-gray-700 text-sm font-bold mb-2 ml-3">
                            Password:
                            <input type="password" 
                               value={this.state.password} 
                               onChange={this.handlePswd} 
                               className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3"
                               placeholder='Difficult123'
                            />
                        </label>
                        </div>
                        <div className="mb-2 pt-1 rounded bg-gray-200">
                        <label className="block text-gray-700 text-sm font-bold mb-2 ml-3">
                            Mail:
                            <input type="mail" 
                               value={this.state.mail} 
                               onChange={this.handleMail} 
                               className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3"
                               placeholder='Katsby@miau.com'
                            />
                        </label>
                        </div>
                        <input className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200" type="submit" value="Submit" />
                    </form>
                    </section>
                </div>
            </Popup>
        );
    }

}

export default SignUp;