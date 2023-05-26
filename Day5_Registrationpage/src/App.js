import logo from './logo.svg';
import './App.css';
import Functional from './Components/Functional';
import Class  from './Components/Class';
import Props from './Components/Props';
import { User } from './Components/User';
import {BrowserRouter,NavLink,Route,Routes} from "react-router-dom";
import { Employee } from './Components/Employee';
import { Login } from './Components/Login';
import {ThemeProvider,createTheme} from "@material-ui/core"
import { Register } from './pages/register';



const Profile=()=>{
  const UserName = "Prince";
  return <h1 className="profile-cmp">profile component</h1>
};
const customTheme = createTheme({
  palette: {
    primary: {
      main: "#f458",
    },
    secondary: {
      main: "#2fc30b",
    },
  },
});


function App() {
  const clickme=()=>alert("clicked")
  return (
    <>
     <ThemeProvider theme={customTheme}>
         <BrowserRouter>
               <div className="App">
               
                    <header className="App-header">
      
   
                    
    {/* <Functional />
    
    <Class /> */}
    {/* <Props name="Prince"  >
    <p>This is children props</p>  
    </Props>
    <Props name ="Sahil" />
    <button>Action</button>
    <Props name ="Nishit" /> */}
    
    <nav>
    <NavLink to="/">    Home      </NavLink>

<NavLink to="/emp">   Employee      </NavLink>

<NavLink to="/profile">    Profile      </NavLink>

<NavLink to="/login">Register  </NavLink>
   
   

    </nav>
   
   
    
  
    </header>
    

    <Routes>
      <Route path="/"  element ={<User name ="Prince" fun={clickme} />}/>  
      <Route path="/emp"  element ={<Employee />}/>  
      <Route path='/profile' element={<Profile/>}/>
      <Route path="/login" element={<Register />} />
    </Routes>
   
    </div>

      
    </BrowserRouter>
    

  </ThemeProvider>
   

    </>
    
  );
}

export default App;
      














