import logo from './logo.svg';
import './App.css';

import React,{useEffect,useState} from 'react';

import {useSelector,useDispatch} from 'react-redux';
import {bindActionCreators} from "redux";
import {actioncreator} from "./State/index";
//import { setState } from './State/action-creators';

import Home from './Components/Home';
import Home1 from './Components/Home1';
import Header from './Components/Header';
import Overlay from './Components/overlay';
import About from './Components/About';
import Achivements from './Components/Achivements';
import Footer from './Components/Footer';
import Projects from './Components/Projects';
import Support from './Components/Support';
import UpcomingEvents from './Components/UpcomingEvents';

function App() {

const state = useSelector((state) => state);
const dispatch = useDispatch();
const action = bindActionCreators(actioncreator,dispatch);

  action.setState("user","Abhi");

  return (
    <div className="App">
      <Header/>
      {state.nav === 'home1' && <Home/>}
      {state.nav === 'home' && <Home1/>}
      {state.nav === 'about' && <About/>}
      {state.nav === 'achive' && <Achivements/>}
      {state.nav === 'projects' && <Projects/>}
      {state.nav === 'support' && <Support/>}
      {state.nav=== 'upcomingevents' &&  <UpcomingEvents/>}
       <Footer/>
       {state.nav !== 'support' &&<Overlay/>}
    </div>
  );
}

export default App;
