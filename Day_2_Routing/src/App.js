import logo from './logo.svg';
import './App.css';
import Functional from './Components/Functional';
import Class  from './Components/Class';
import Props from './Components/Props';
import { User } from './Components/User';
import {BrowserRouter,NavLink,Route,Routes} from "react-router-dom";
import { Employee } from './Components/Employee';

const Profile=()=>{
  return <h1>profile component</h1>
};


function App() {
  const clickme=()=>alert("clicked")
  return (
    <div className="App">
    {/* <Functional />
    <Class /> */}
    {/* <Props name="Prince"  >
    <p>This is children props</p>  
    </Props>
    <Props name ="Sahil" />
    <button>Action</button>
    <Props name ="Nishit" /> */}
    <BrowserRouter>
    <NavLink NavLink to="/">home</NavLink>

    <NavLink to="/emp">employee</NavLink>

    <NavLink to="/profile">profile</NavLink>

    <Routes>
      <Route path="/"  element ={<User name ="Prince" fun={clickme} />}/>  
      <Route path="/emp"  element ={<Employee />}/>  
      <Route path='/profile' element={<Profile/>}/>
    </Routes>
      
    </BrowserRouter>
   

      
      
    </div>
  );
}

export default App;
      














