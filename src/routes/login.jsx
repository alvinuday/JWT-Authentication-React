import React from 'react';
import '../styles/Login.css';
function Login() {
    return (
        <div className="wrapper">
        <div className="heading">
            <h3>Login</h3>

        
        
        </div>
        <div className="loginBox">
                <form>
            <ul className="list">

                <li><label htmlFor="username">Username</label>
            <input name="username" type="text" value="" placeholder="Username" /></li>
                <li><label htmlFor="Password">Password</label>
            <input name="Password" type="text" value="" placeholder="Password" /></li>
            </ul>
                <button type="submit">Login</button>
                
                </form>
            
            

        </div>
        </div>

    ); 
        
    
}
export default Login;