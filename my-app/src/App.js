import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import About from "./Routes/AboutPage";
import Contact from "./Routes/Contact";
import Home from "./Routes/Home";
import Projects from "./Routes/Projects";

function App() {    
  return (
    <div className="App">
      <Router>
        <Routes> 
        
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/contact' element={<Contact/>}/>
        
        </Routes>

      </Router>
      
      

      
    </div>
  );
}

export default App;
