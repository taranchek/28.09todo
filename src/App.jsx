import React from 'react'
import Routes from './Routes';
import {BrowserRouter as Router} from "react-router-dom"
import Menu from './Menu';

export default function App(){
  return (
    <div className='container'> 
      <Router>
        <Menu/>
        <Routes/>
      </Router>
    </div>
  )
}

