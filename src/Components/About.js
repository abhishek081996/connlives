import React from "react";
import '../Css/About.scss';

import {useSelector,useDispatch} from 'react-redux';
import {bindActionCreators} from "redux";
import {actioncreator} from "../State/index";
import { setState } from '../State/action-creators';

import {Navbar,Carousel, Container, NavDropdown, Row, Form,Nav,Col } from "react-bootstrap";

function Header() {

    const state = useSelector((state) => state);
    const dispatch = useDispatch();
    const action = bindActionCreators(actioncreator,dispatch);


return <div className="main-about">
    <h1>About</h1></div>

}
export default Header;

