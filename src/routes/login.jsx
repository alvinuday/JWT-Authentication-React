import React from 'react';
import '../styles/Login.css';
function Login() {
    async function login() {
        try {
            const data = {
                email: document.getElementById('loginEmail').value,
                password: document.getElementById('loginPassword').value
            };
            let response = await fetch('http://localhost:3000/login/', {
                method: 'POST',
                body: JSON.stringify(data)
            });
            console.log(data);
            return await response.json();

        } catch (err) {
            console.error(err);
            console.log("error");
            // Handle errors here
        }

    }
    return (
        <div className="wrapper">
        <div className="heading">
            <h3>Login</h3>

        
        
        </div>
        <div className="loginBox">
            
            <ul className="list">

                <li><label htmlFor="username">Email</label>
            <input name="username" type="email" id="loginEmail"  placeholder="Email" /></li>
                <li><label htmlFor="Password">Password</label>
            <input name="Password" type="password" id="loginPassword"  placeholder="Password" /></li>
            </ul>
                <button onClick={login}>Login</button>
                
             
            
            

        </div>
        </div>

    ); 
        
    
}
export default Login;