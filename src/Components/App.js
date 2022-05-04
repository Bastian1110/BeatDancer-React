import './App.css';
import BDLogo from '../Assets/Logo.png'
import PlayImage from '../Assets/Play.jpg'
import Manual from '../Assets/Manual.jpg'
import About from '../Assets/About.jpg'
import LogIn from './LogIn';
import SignUp from './SignUp';
import { useState } from 'react';

function App() {
  const [username, setName] = useState("User");
  return (
    <div className="App">
      <img src={BDLogo} id='BDLogo'/>
      <a href='https://github.com/Bastian1110/BeatDancer-PAS' className="bg-black text-white font-bold rounded mx-4 block py-2 px-4 float-right">GitHub</a>
      <section>
      <div className=" inline text-white font-bold rounded bg-pink-600 py-2 px-8 mx-8">{username}</div>
      </section>
      <LogIn fetchUser={(name)=>setName(name)}  className="LogIn"/>
      <SignUp className="SignUp"/>

      <img src={PlayImage} className="py-20 px-20"/>
      <img src={Manual} className="py-20 px-20"/>
      <img src={About} className="py-20 px-20"/>

    </div>
  );
}

export default App;
