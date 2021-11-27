import React, { useState } from 'react';
import '../styles/Login.css';
import { Route, Redirect } from 'react-router-dom';
function Protected() {
    const [isLoggedIn, setLogin] = useState(JSON.parse(sessionStorage.getItem("loggedIn")));
    function logout(){
        sessionStorage.setItem("loggedIn",false);
        console.log("logout");
        setLogin(false);
    }
    console.log("Login State", isLoggedIn);
    if (isLoggedIn === false) {
        return <Redirect to="/Register" />
    }
    else {
        console.log("You are logged in");
    }
    return (
        <div className="wrapper">
            <h1 className="heading">Protected Page</h1>
            <h4 className="heading">Login Success</h4>
            <div className="logout">
                <button onClick={logout}>Logout</button>
            </div>
        </div>

    );


}
export default Protected;