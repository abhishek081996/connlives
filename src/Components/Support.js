import React, { useState ,useEffect}  from "react";
import '../Css/Support.scss';
//import data from '../data.json';
import axios from "axios";
import fund from '../Assets/fund.jpg';
import helpingteam from '../Assets/helpingteam.png';
import stationary from '../Assets/stationary.png';
import bank from '../Assets/bank.png';

import {useSelector,useDispatch} from 'react-redux';
import {bindActionCreators} from "redux";
import {actioncreator} from "../State/index";
import { setState } from '../State/action-creators';


import {Navbar,Carousel, Container, NavDropdown, Row, Form,Nav,Col } from "react-bootstrap";



function Support() {
const [fname, setFname] = useState();
const [lname, setLname] = useState();
const [email, setEmail] = useState();
const [phno, setPhno] = useState();
const [add1, setadd1] = useState();
//const [phno, setPhno] = useState();
//const [phno, setPhno] = useState();
   // const [resp,setResp]=useState(null);
    const state = useSelector((state) => state);
    const dispatch = useDispatch();
    const action = bindActionCreators(actioncreator,dispatch);
 
   // React.useEffect(() => {    }, []);


  function handleSubmit(event) {
    
    const req =  {"fname":fname,
                      "lname":lname,
                      "email":email,
                      "btn":phno,
                      "addr":add1,
                          };
        axios.post('/api/postformdata/', req)
            .then(response => {
            //console.log(response);
            if(response.data.sql === true)
             {
               alert('Succesfully Submited');
              action.setState("nav","home");
            }
            else{
              alert('Please retry');
            }}) 
            .catch(error => {
              alert('Please retry');
              });

    
  };



   const style = {
    width:'100px',
     height: '100px'
  };
return (
<div className="supportuspage">
    <div className="rts">CHANGE LIVES. SAVE LIVES</div>
    <div className="details"> <p>CONNECTING LIVES has been working in Delphi for over 10 years, 
    for the upliftment of society through 53 programmes in Azadpur, Delhi </p>  
    <div  style={style}>
<svg class="pie-assign" viewBox="0 0 30 30">
  <circle className="circle-7" r="15" cx="15" cy="15"  transform="rotate(300,15,15)" />
  <text x="50%" y="50%" text-anchor="middle" fill="gray" dy=".3em"></text>
</svg> </div><p className="pie-desc">90% of the funds are used for the people </p>
</div>
<div class="home-stats-wrapper">
		<h2 class="title-primary">This is where <em>YOU</em> can help.</h2>
		<ul class="home-stats-list">
						<li class="home-stats-item animate-card"><img alt="Connectinglives"
             data-src={helpingteam}
              class=" lazyloaded" 
              src={helpingteam}/>
				<h3>A helping team</h3>
				<span>Description here.</span>
			</li>
      <li class="home-stats-item animate-card">
      <img alt="Connectinglives"
             data-src={stationary}
              class=" lazyloaded" 
              src={stationary}/>
				<h3>Stationary</h3>
				<span>Description here.</span>
			</li>
      <li class="home-stats-item animate-card">
      <img alt="Connectinglives"
             data-src={fund}
              class=" lazyloaded" 
              src={fund}/>
				<h3>Funds</h3>
				<span>Description here.</span>
			</li>
      </ul></div>
<div className="bankdtls"><img alt="Connectinglives"
             data-src={bank}
              class=" lazyloaded" 
              src={bank}/></div>


<div className="formdiv">
  <div className="formmotto">Alone we can do so little; <br/> together we can do so much.</div>
<form class="form" onSubmit={()=>handleSubmit()}>
      <div class="title">Support Us..</div>
      <div class="subtitle">We will reach to you soon!</div>
      <div class="input-container ic1">
        <input id="firstname" class="input" type="text" placeholder=" " onChange={e => setFname(e.target.value)} />
        <div class="cut"></div>
        <label for="firstname" class="placeholder">First name</label>
      </div>
      <div class="input-container ic2">
        <input id="lastname" class="input" type="text" placeholder=" " onChange={e => setLname(e.target.value)} />
        <div class="cut"></div>
        <label for="lastname" class="placeholder">Last name</label>
      </div>
      <div class="input-container ic2">
        <input id="email" class="input" type="text" placeholder=" " onChange={e => setEmail(e.target.value)} />
        <div class="cut cut-short"></div>
        <label for="email" class="placeholder">Email</label>
      </div>
      <div class="input-container ic2">
        <input id="phone" class="input" type="text" placeholder=" " onChange={e => setPhno(e.target.value)} />
        <div class="cut"></div>
        <label for="phone" class="placeholder">Contact No.</label>
      </div>
      <div class="input-container ic2">
        <input id="add1" class="input" type="text" placeholder=" " onChange={e => setadd1(e.target.value)} />
        <div class="cut"></div>
        <label for="add1" class="placeholder">Address</label>
      </div>
  
      <button type="text"  value="Submit" class="submit">Submit</button>
    </form>
    </div>

    </div>);

}
export default Support;

