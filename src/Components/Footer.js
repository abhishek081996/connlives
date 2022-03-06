import React from "react";
import '../Css/Footer.scss';

import {useSelector,useDispatch} from 'react-redux';
import {bindActionCreators} from "redux";
import {actioncreator} from "../State/index";
import { setState } from '../State/action-creators';


function Footer() {

    const state = useSelector((state) => state);
    const dispatch = useDispatch();
    const action = bindActionCreators(actioncreator,dispatch);

    return <div className="disclaimer">
    This wesbsite is created and maintained by Connecting lives<span>©</span> 
    </div>;

}

export default Footer;
