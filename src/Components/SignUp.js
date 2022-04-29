import style from './SignUpStyle.css'
import React from 'react'
import axios from 'axios';
import Modal from 'react-modal'
import ModalButton from './ModalButton';


class SignUp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name:'',
            birthday:'',
            country:'',
            password:'',
            mail:'',
            modalOpened: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleName = this.handleName.bind(this);
        this.handlePswd = this.handlePswd.bind(this);
        this.handleBirthDay = this.handleBirthDay.bind(this);
        this.handleCountry = this.handleCountry.bind(this);
        this.handleMail = this.handleMail.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal() {
        this.setState(prevState => ({ modalOpened: !prevState.modalOpened }));
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
            <ModalButton handleClick={this.toggleModal}>Sign Up</ModalButton>
            <Modal 
                className={{ base: [style.formPopUpClosed]}}
                overlayClassName={{ base: [style.formPopUpOpen] }}
                isOpen={this.state.modalOpened}
                onRequestClose={this.toggleModal}
            >
            <div className='formContainer'>
                <h3>Sign Up</h3>
                <form onSubmit={this.handleSubmit}>
                    <label className='inputLabel'>
                        Username:
                        <input type="text" 
                               value={this.state.name} 
                               onChange={this.handleName} 
                               className="inputBox"
                               placeholder='CuteCat22'
                        />
                    </label>
                    <label className='inputLabel'>
                        Birthday:
                        <input 
                                type="date" 
                                value={this.state.birthday} 
                                onChange={this.handleBirthDay} 
                                className="inputBox"
                        />
                    </label>
                    <label className='inputLabel'>
                        Country:
                        <input type="country" 
                               value={this.state.country} 
                               onChange={this.handleCountry} 
                               className="inputBox"
                               placeholder='Wonderland'
                        />
                    </label>
                    <label className='inputLabel'>
                        Password:
                        <input type="password" 
                               value={this.state.password} 
                               onChange={this.handlePswd} 
                               className="inputBox"
                               placeholder='Difficult123'
                        />
                    </label>
                    <label className='inputLabel'>
                        Mail:
                        <input type="mail" 
                               value={this.state.mail} 
                               onChange={this.handleMail} 
                               className="inputBox"
                               placeholder='Katsby@miau.com'
                        />
                    </label>
                    <button className='cancelButton' onClick={this.toggleModal}>Cancel</button>
                    <input type="submit" value="Submit" />
                </form>
            </div>
            </Modal>
            </>
        );
    }

}

export default SignUp;