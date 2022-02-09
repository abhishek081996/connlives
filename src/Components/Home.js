import React from "react";
import '../Css/Home.scss';

import {useSelector,useDispatch} from 'react-redux';
import {bindActionCreators} from "redux";
import {actioncreator} from "../State/index";
import { setState } from '../State/action-creators';
import logo from '../Assets/logo.png';
import  c1 from '../Assets/c1.png';
import  c2 from '../Assets/c2.jpg';
import  c3 from '../Assets/c4.jpg';
import  c4 from '../Assets/c3.jpg';

import {Carousel, Container, NavDropdown, Row, Form,Nav,Col } from "react-bootstrap";


import Header from './Header';
function Home() {

    const state = useSelector((state) => state);
    const dispatch = useDispatch();
    const action = bindActionCreators(actioncreator,dispatch);

    return <div className='main'>
       <div className='main-head'>Connecting Lives</div>

        <div className='links'>
        <Row> 
        <Col md={4} xs={12} className='links-pad'   >
        <div className='links1'>
        <a href=''>Our Goals</a></div>
        </Col>
        <Col md={4} xs={12} className='links-pad'  >
        <div className='links2'>
        <a href=''>Our Objective</a></div>
        </Col>
        <Col md={4} xs={12} className='links-pad'  >
        <div className='links3'>
        <a href=''>Activities</a> </div>
       </Col>
        </Row>
        </div>
        <div className='ctl'>Connecting Lives <br/>
<span  className='ngo'>An NGO registered under Niti Ayog with Id.DL/2019/0244002</span>
</div>

        <div className='motto'>I am the motto of connecting lives</div>
        <div className='text-field1'>Some text goes here.</div>
        <div>
            <Row className='support-row'>
                <Col md={5} xs={12} className='links-pad'>
                   <div className='image-supp'> <img src={c1} ></img></div>
                </Col>
                <Col md={7} xs={12} className='links-pad'>
                    <div className='support-key'>
                        <h3><a href=''>Join Us</a></h3>
                        <p>Enlighten and Educate</p>
                    </div>
                    
                </Col>
            </Row>
        </div>
        <div>
            <Row className='footer' >
                <Col md={4} xs={12} className='footer1'>
                    <div>
                        <h3>Connecting Lives</h3>
                        <p>I am a paragraph regarding connecting lives
                            <br/>
                            <span>Email :</span> emailid@domain.com <br/>
                            <span>Phone :</span> 0000000000 <br/>
                            <span>Location :</span> New Delhi<br/>
                        </p>
                        
                    </div>
                </Col>
                <Col md={4} xs={12} className=''>

                </Col>
                <Col md={4} xs={12} className='quicklinks'>
                <h3>Quick Links</h3><br/>
                <div><a>About</a><br/>
                <a>Support Us</a><br/>
                <a>News</a><br/>
                <a>Contact</a></div>
                </Col>
            </Row>
        </div>
        <div className="disclaimer">
            This wesbsite is created and maintained by Connecting lives<span>©</span> 
        </div>
        
       
    </div>
}

export default Home;