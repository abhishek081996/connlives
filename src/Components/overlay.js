import React from "react";
import '../Css/Overlay.scss';

import {Button, Container, NavDropdown, Row, Form,Nav,Col } from "react-bootstrap";


import {useSelector,useDispatch} from 'react-redux';
import {bindActionCreators} from "redux";
import {actioncreator} from "../State/index";
import { setState } from '../State/action-creators';

function Overlay(){
const state = useSelector((state) => state);
const dispatch = useDispatch();
const action = bindActionCreators(actioncreator,dispatch);

return <div className="support">
    <a><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-suit-heart-fill" viewBox="0 0 16 16">
  <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"/>
</svg></a>
<Button className="button" onClick={()=> action.setState("nav","support")} >Show your Love</Button>
</div>

}

export default Overlay;