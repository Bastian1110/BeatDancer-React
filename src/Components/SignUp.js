import './SignUp.css'
import React from 'react'

class SignUp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name:'',
            birthday:'',
            country:'',
            password:'',
            mail:''
        }
    }
    render(){
        return(
            <div class="container">
                <h3>Sign Up</h3>
                <form>
                    <label>
                        Username:
                        <input type="text" class="inputBox"/>
                    </label>
                    <label>
                        Birthday:
                        <input type="date" class="inputBox"/>
                    </label>
                    <label>
                        Country:
                        <input type="country"  class="inputBox"/>
                    </label>
                    <label>
                        Password:
                        <input type="password"  class="inputBox"/>
                    </label>
                    <label>
                        Mail:
                        <input type="mail" class="inputBox"/>
                    </label>
                    
                </form>
            </div>
        );
    }

}

export default SignUp;