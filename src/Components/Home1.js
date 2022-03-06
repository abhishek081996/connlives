import React, { useState ,useEffect}  from "react";
import '../Css/Home1.scss';
import axios from "axios";

import {useSelector,useDispatch} from 'react-redux';
import {bindActionCreators} from "redux";
import {actioncreator} from "../State/index";
import { setState } from '../State/action-creators';
//import  c2 from '../Assets/c2.jpg';
import  c1 from '../Assets/c1.png';
import  c3 from '../Assets/c3.jpg';
import  c4 from '../Assets/c4.jpg';
import  delhi from '../Assets/delhi.png';


import {Carousel, Container, NavDropdown, Row, Form,Nav,Col } from "react-bootstrap";
//import { DEVICE_SIZES } from "react-bootstrap/esm/createUtilityClasses";

function Home1() {
  const [resp,setResp]=useState();
    const state = useSelector((state) => state);
    const dispatch = useDispatch();
    const action = bindActionCreators(actioncreator,dispatch);


    React.useEffect(() => {
      const article =  {"token":"abhishek"};
      axios.post('/content/home.json', article)
          .then( response => { if(response.data)  {setResp(response.data);} else {setResp();} }) 
          .catch(error => {
             setResp();
            })

  }, []);

    return <div className="main">
        
        <Carousel  prevLabel='' nextLabel='' indicators={false}>
  <Carousel.Item  className="carousel" interval={5000}>
    <img
      className="d-block w-100"
      src={c1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Me to We</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className="carousel" interval={5000}>
    <img
      className="d-block w-100"
      src={c3}
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className="carousel" interval={5000}>
    <img
      className="d-block w-100"
      src={c4}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
<Container className="welcome">Welcome to Connecting Lives</Container>
{false && <Container className="motto1">"आपका कोई भी कार्य ऐसा हो जो किसी अंजान व्यक्ति को भी इंसानियत पर भरोसा कर पाने मे मदद करे! <br/>- अर्चना तिवारी"</Container>}
{true && <Container className="motto1">"Be someone's light when they are hopeless."</Container>}
<div>
<div className="about"><p><span>Background</span><br/>After working on ground in Azadpur, Delhi for almost 10
years, Archana Tiwari, the founder of this organization,
realized that in order to enlarge the scope and widen the help
she can offer, she registered Connecting Lives on 16th May
2019. She is a firm believer in connectedness and
collaboration can help us overcome barriers and hindrances
lying in the ways of progress. In her journey of 10 years,
Connecting Lives is an idea and now an initiative for
extending our helping hand based on experiences.</p><img src={delhi}></img></div>

    </div>

    </div>

}

export default Home1;