//import logo from './logo.svg';
import 'react-awesome-button/dist/styles.css';
import { AwesomeButton } from 'react-awesome-button';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './App.css';


const containerStyle = {
  backgroundColor: 'blue',
  fontSize: '50px',
  
}



function App() {
  const name = "sarnai";
  return (
    <>
    
            <div className="App" style={containerStyle}>Hello
            </div>
            <div>
              <container>
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">About</Nav.Link>
              <Nav.Link href="#action3">Link</Nav.Link>
              <Nav.Link href="#action4">Contact</Nav.Link>
              </container>
            </div>
            <div> 
            {name}
            <AwesomeButton type="primary">Button</AwesomeButton>
            </div>
           
            
            
            
          
    </>
  );
}

export default App;


    
   