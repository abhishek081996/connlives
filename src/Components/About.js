import React, { useState }  from "react";
import '../Css/About.scss';
import axios from "axios";
//import data from '../about.json';

import {useSelector,useDispatch} from 'react-redux';
import {bindActionCreators} from "redux";
import {actioncreator} from "../State/index";
import { setState } from '../State/action-creators';


import {Navbar,Carousel, Container, NavDropdown, Row, Form,Nav,Col } from "react-bootstrap";

function Header() {
    const [data,setData]=useState();

    const state = useSelector((state) => state);
    const dispatch = useDispatch();
    const action = bindActionCreators(actioncreator,dispatch);

    React.useEffect(() => {
        const article =  {"token":"abhishek"};
        axios.post('/content/about.json', article)
            .then( response => { if(response.data)  {setData(response.data);} else {setData();} }) 
            .catch(error => {
                setData();
              })

    }, []);

return <div className="main-about">
    
   {(data) && (data.card.map(post =>{return (<Container fluid  className="cointainer">
    <h2>{post.header}</h2>
    <Row className="mainrow">
    {post.cards.map( x =>{return(<Col md={4} xs={12} className='card'  > <div className="box"><div className="title">{x.key}</div><div className="content">{x.content}</div></div> </Col>)} )}  
    </Row>
    </Container>);}) )
}
    </div>

}
export default Header;

