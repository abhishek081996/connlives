import React from "react";
import '../Css/Header.css';

import {useSelector,useDispatch} from 'react-redux';
import {bindActionCreators} from "redux";
import {actioncreator} from "../State/index";
import { setState } from '../State/action-creators';
import logo from '../Assets/logo.png';

import {Navbar,Carousel, Container, NavDropdown, Row, Form,Nav,Col } from "react-bootstrap";

function Header() {

    const state = useSelector((state) => state);
    const dispatch = useDispatch();
    const action = bindActionCreators(actioncreator,dispatch);

    return (<div>
          <Navbar bg="trarnsperent" fixed='top' variant="dark">
    <Container fluid className='container-fluid'>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto justify-content-end">
      <Nav.Link href="#home" onClick={()=> action.setState("nav","home")} >Home</Nav.Link>
      <Nav.Link href="#about" onClick={()=> action.setState("nav","about")}>About Us</Nav.Link>
      <Nav.Link href="#projects">Projects</Nav.Link>
      <Nav.Link href="#achievements">Achivements</Nav.Link>
      <Nav.Link href="#contactus">Contact Us</Nav.Link>
    </Nav>
    </Container>
  </Navbar>

    </div>)

}


export default Header;