import './App.css';
import BDLogo from '../Assets/Logo.png'
import LogIn from './LogIn';
import SignUp from './SignUp';
import { useState } from 'react';

function App() {
  const [username, setName] = useState("");
  return (
    <div className="App">
      <img src={BDLogo} id='BDLogo'/>
      <section>
      <div className='User'>{username}</div>
      </section>
      <LogIn fetchUser={(name)=>setName(name)}  className="LogIn"/>
      <SignUp className="SignUp"/>

    </div>
  );
}

export default App;
