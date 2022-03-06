import React, { useState ,useEffect}  from "react";
import '../Css/Achivements.scss';
import axios from "axios";
//import data from '../timeline.json';
//import dataon from '../ongoing.json';

import {useSelector,useDispatch} from 'react-redux';
import {bindActionCreators} from "redux";
import {actioncreator} from "../State/index";
import { setState } from '../State/action-creators';

import Slider from "react-slick";


import {Navbar,Carousel, Container, NavDropdown, Row, Form,Nav,Col } from "react-bootstrap";

function Achivements() {
  const [data,setData]=useState();
  const [dataon,setDataon]=useState();

  React.useEffect(() => {
    
    axios.post('/content/timeline.json', '')
        .then( response => { if(response.data)  {setData(response.data);} else {setData();} }) 
        .catch(error => {
            setData();
          });
          axios.post('/content/ongoing.json', '')
        .then( response => { if(response.data)  {setDataon(response.data);} else {setDataon();} }) 
        .catch(error => {
            setDataon();
          });

}, []);

    const state = useSelector((state) => state);
    const dispatch = useDispatch();
    const action = bindActionCreators(actioncreator,dispatch);

       var settings = {
          dots: false,
          infinite: true,
          arrows:false,
          speed: 500,
          autoplaySpeed:2000,
          autoplay:true,
          lazyLoad: true,
          slidesToShow: 3,
          slidesToScroll: 2,
          adaptiveHeight:true,
          pauseOnFocus:true,
          pauseOnHover:false,
          responsive:[{
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }]
        };
       



return <div className="main-achive">
    <h2>ONGOING WORK</h2>
{(dataon) && <Container fluid className="onwork">
    <Slider {...settings} >
        {dataon.map(post => {return(<div className="slide">
      <div className="img-div"><img src={post.image_link} alt={post.title} /></div>
      <h3>{post.title}</h3>
    </div>
 );})}
            
        </Slider>
        </Container>}
        {!(dataon) && <h2>Loading</h2>}
        



    <h2>OUR ROAD TO GLORY!</h2>
    {!(data) && <h2>Loading</h2>}
    { (data) && (data.timeline.map(post =>{return (<Container fluid  className="achive-cointainer">
  <div className="timeline">
      <div className="timeline-item">
      <p>
      <span className='time'>{post.date}</span>
      <br/>{post.details}</p>
      <span className="circle"></span>
      </div>
  </div>

  
    </Container>);}))}
    </div>

}
export default Achivements;

