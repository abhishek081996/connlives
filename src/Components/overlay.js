import React from "react";
import '../Css/Overlay.css';


import {useSelector,useDispatch} from 'react-redux';
import {bindActionCreators} from "redux";
import {actioncreator} from "../State/index";
import { setState } from '../State/action-creators';

function Overlay(){
const state = useSelector((state) => state);
const dispatch = useDispatch();
const action = bindActionCreators(actioncreator,dispatch);

return (<div/>);

}

export default Overlay;