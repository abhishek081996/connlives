
import React, { useState ,useEffect}  from "react";
import '../Css/UpcomingEvents.scss';
import axios from "axios";

import {useSelector,useDispatch} from 'react-redux';
import {bindActionCreators} from "redux";
import {actioncreator} from "../State/index";
import { setState } from '../State/action-creators';
import def from '../defaultevent.json';

import {Navbar,Carousel, Container, NavDropdown, Row, Form,Nav,Col } from "react-bootstrap";



function UpcomingEvents() {
    const [resp,setResp]=useState();
    //const [def,setDef]=useState();

    const state = useSelector((state) => state);
    const dispatch = useDispatch();
    const action = bindActionCreators(actioncreator,dispatch);
 
    React.useEffect(() => {
        
        const article =  {"token":"abhishek"};
        axios.post('/api/getevents/', article)
            .then( response => { if(response.data.events)  {setResp(response.data);
                //console.log(response.data);
            } else {setResp(def);
               // console.log("fetch unsuccessful");
            } }) 
            .catch(error => {
               setResp();
              // console.log("fetch error");
              })

    }, []);

return (<div className="upsc">   
    <div class="card-container">

    {(resp) &&resp.events.map(post =>{return (
    <div class="card">
            <header class="article-header">
                <div>
                    <div class="category-title">
                        {post.title}
                        {(post.date) && <span class="date">{post.date}</span> }
                    </div>
                </div>
                {(post.details.type === 'text') &&<h2 class="article-title">
                {post.details.value}
                </h2>}
                {(post.details.type === 'img') &&<img src={post.details.value} class="article-title-img">
                
                </img>}

            </header>
            <div class="author">
                {(post.profile) && <div class="profile">{post.profile}</div>}{!(post.profile) && <div class="profile"></div>}
                <div class="info">
                {(post.captionhead) && <div class="caption">{post.captionhead}</div>}
                {(post.captionvalue) &&  <div class="name">{post.captionvalue}</div>}
                </div>
            </div>
            <div class="tags">
                {(!post.tag1link && post.tag1) &&<div>{post.tag1}</div>}
                {(!post.tag2link && post.tag2)  &&<div>{post.tag2}</div>}
                {(post.tag1link && post.tag1)  &&<div><a target='_blank' href={post.tag1link}>{post.tag1}</a></div>}
                {(post.tag2link && post.tag2)  &&<div><a target='_blank' href={post.tag1link}>{post.tag2}</a></div>}
            </div>
        </div>
        
        );})}

        {!(resp) && <div class="card">Loading</div>}

        
        

    </div>
    
    </div>);

}
export default UpcomingEvents;

