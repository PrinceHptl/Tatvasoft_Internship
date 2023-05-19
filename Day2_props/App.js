import logo from './logo.svg';
import './App.css';
import Functional from './Components/Functional';
import Class  from './Components/Class';
import Props from './Components/Props';


function App() {
  return (
    <div className="App">
    {/* <Functional />
    <Class /> */}
    <Props name="Prince"  >
    <p>This is children props</p>  
    </Props>
    <Props name ="Sahil" />
    <button>Action</button>
    <Props name ="Nishit" />
    

      
      
    </div>
  );
}

export default App;
      














