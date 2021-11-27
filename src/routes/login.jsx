import React, { useState } from 'react';
import '../styles/Login.css';
import { loginApi } from '../components/api'
import { Redirect, Switch, Route } from 'react-router-dom';
function Login() {
    const [loggedIn, setLogin] = useState(false);
    async function login() {
        try {
            const data = {
                email: document.getElementById('loginEmail').value,
                password: document.getElementById('loginPassword').value
            };
            // let response = await fetch('http://localhost:3000/login/', {
            //     method: 'POST',
            //     body: JSON.stringify(data)
            // });
            // console.log(data);
            // return await response.json();
            loginApi(data).then(() => {
                if (sessionStorage.getItem('loggedIn') === 'true') {
                    // console.log("true");
                    setLogin(true);
                }
            })

        } catch (err) {
            console.error(err);
            console.log("error");
            // Handle errors here
        }

    }
    if (loggedIn === true) {
        return <Redirect to="/Protected" />
    }
    return (
        <div className="wrapper">
            <div className="heading">
                <h3>Login</h3>



            </div>
            <div className="loginBox">
                <form>
                    <ul className="list">

                        <li><label htmlFor="username">Email</label>
                            <input required name="username" type="email" id="loginEmail" placeholder="Email" /></li>
                        <li><label htmlFor="Password">Password</label>
                            <input required name="Password" type="password" id="loginPassword" placeholder="Password" /></li>
                    </ul>
                    <button type="button" onClick={login}>Login</button>
                </form>




            </div>
        </div>

    );


}
export default Login;