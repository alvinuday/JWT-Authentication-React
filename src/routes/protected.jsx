import React from 'react';
import '../styles/Login.css';
import { Route, Redirect } from 'react-router-dom';
function Protected() {
    return (
        <div className="wrapper">
        <h1 className="heading">Protected Page</h1>
        <h4 className="heading">Login Success</h4>
        <div className="logout">
        <button>Logout</button>
        </div>
        </div>

    ); 
        
    
}
export default Protected;