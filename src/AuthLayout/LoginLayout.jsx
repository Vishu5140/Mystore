import React from 'react'
import Login from '../Components/Login';
import Signup from '../Components/Signup';

function LoginLayout() {
    const Sign=localStorage.getItem("Signup");
    if(Sign) return <Login/>
    else return <Signup/>
}

export default LoginLayout