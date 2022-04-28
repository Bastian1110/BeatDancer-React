import './App.css';
import BDLogo from '../Assets/Logo.png'
import SignUp from './SignUp';

function App() {
  return (
    <div className="App">
      <img src={BDLogo} id='BDLogo'/>
      <SignUp/>
    </div>
  );
}

export default App;
