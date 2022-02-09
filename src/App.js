import logo from './logo.svg';
import './App.css';

import React,{useEffect,useState} from 'react';

import {useSelector,useDispatch} from 'react-redux';
import {bindActionCreators} from "redux";
import {actioncreator} from "./State/index";
//import { setState } from './State/action-creators';

import Home from './Components/Home';
import Header from './Components/Header';
import Overlay from './Components/overlay';
import About from './Components/About';

function App() {

const state = useSelector((state) => state);
const dispatch = useDispatch();
const action = bindActionCreators(actioncreator,dispatch);

  action.setState("user","Abhi");

  return (
    <div className="App">
      <Header/>
      {state.nav === 'home' && <Home/>}
      {state.nav === 'about' && <About/>}
    </div>
  );
}

export default App;
