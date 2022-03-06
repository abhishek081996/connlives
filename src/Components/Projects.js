import React, { useState ,useEffect}  from "react";
import '../Css/Project.scss';
//import data from '../data.json';
import axios from "axios";

import {useSelector,useDispatch} from 'react-redux';
import {bindActionCreators} from "redux";
import {actioncreator} from "../State/index";
import { setState } from '../State/action-creators';


import {Navbar,Carousel, Container, NavDropdown, Row, Form,Nav,Col } from "react-bootstrap";



function Projects() {
    const [resp,setResp]=useState(null);


    const state = useSelector((state) => state);
    const dispatch = useDispatch();
    const action = bindActionCreators(actioncreator,dispatch);
 
    React.useEffect(() => {
        // Simple POST request with a JSON body using axios
        const article =  {"user":"abhishek"};
        axios.post('https://www.connectinglives1.ml/api/gettoken/', article)
            .then(response => {console.log(response.data); setResp(response.data)}) 
            .catch(error => {
               setResp(error);
              })

    }, []);

return (<div className="proj">
    <h2>axios</h2>
      <h2>{JSON.stringify(resp)}</h2>
    
    </div>);

}
export default Projects;

