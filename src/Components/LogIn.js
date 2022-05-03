import React from "react";
import axios from "axios";
import Popup from "reactjs-popup";

import './LogIn.css'

class LogIn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name : '',
            password : '',
            data : ''
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
        .post("http://157.245.9.203/API/LogIn.php",JSON.stringify(this.state))
        .then(res=>this.setState({data: res.data}))
        .catch(err => console.log(err));
        this.props.fetchUser(this.state.name);
        console.log(this.state.data);
        event.preventDefault();
    }

    render(){
        return(
            <Popup trigger={<button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-8 mx-8 rounded shadow-lg hover:shadow-xl transition duration-200 float-right"> Log In </button>} modal>
                <div className="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
                    <section>
                    <h2 className="font-bold text-2xl">Log In</h2>
                    <p className="text-gray-300 pt-2">Log in to your account</p>
                    </section>

                    <section>
                    <form className="flex flex-col" onSubmit={this.handleSubmit}>
                        <div className="mb-3 pt-3 rounded bg-gray-200">
                        <label className="block text-gray-700 text-sm font-bold mb-2 ml-3">
                            Usename: 
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
                            Password: 
                            <input type="password" 
                               value={this.state.password} 
                               onChange={this.handlePswd} 
                               className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-2 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3"
                               placeholder='Difficut123'
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
export default LogIn;