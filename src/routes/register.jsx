import React from 'react';
import '../styles/Login.css';
function Login() {
    return (
        <div className="wrapper">
        <div className="heading">
            <h3>Register</h3>

        
        
        </div>
        <div className="loginBox">
                <form>
            <ul className="list">

                <li><label htmlFor="username"> Create Username</label>
            <input name="username" type="text" value="" placeholder="Username" /></li>
                <li><label htmlFor="Password">Create Password</label>
            <input name="Password" type="text" value="" placeholder="Password" /></li>
            </ul>
                <button type="submit">Register</button>
                
                </form>
            
            

        </div>
        </div>

    ); 
        
    
}
export default Login;