//import logo from './logo.svg';
import 'react-awesome-button/dist/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AwesomeButton } from 'react-awesome-button';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './App.css';
import { Component } from 'react';
import { CategoryList } from './Component/CategoryList';


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
              <Container className="justify-content-md-center">
                <Navbar> 
                  <Nav>
                  <Nav.Link href="#">Админ</Nav.Link>
                  <Nav.Link href="#">Хэрэглэгч</Nav.Link>
                  <Nav.Link href="#">Ангилал</Nav.Link>
                  <Nav.Link href="#">Мэдээ</Nav.Link>
                  <Nav.Link href="#">Сэдэв</Nav.Link>
                  </Nav>
             
              </Navbar>
                    Ангилал
                    <CategoryList/>
                 
            
               </Container>
            </div>
           
           
           
            
            
            
          
    </>
  );
}

export default App;


    
   