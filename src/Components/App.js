import './App.css';
import BDLogo from '../Assets/Logo.png'
import LogIn from './LogIn';
import SignUp from './SignUp';

function App() {
  return (
    <div className="App">
      <img src={BDLogo} id='BDLogo'/>
      <LogIn className="LogIn"/>
      <SignUp className="SignUp"/>
    </div>
  );
}

export default App;
