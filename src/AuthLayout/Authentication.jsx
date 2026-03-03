import React from 'react'
import { Outlet } from 'react-router';
import Signup from '../Components/Signup';

function Authentication() {
    const authentication=localStorage.getItem("auth");
    if(authentication) return <Outlet/>
     else return <Signup/>
}

export default Authentication