import React from 'react';
import '../styles/Login.css';
function Login() {
    async function register() {
        try {
            const data = {
                name: document.getElementById('registerName').value,
                email: document.getElementById('registerEmail').value,
                password: document.getElementById('registerPassword').value
            };
            let response = await fetch('http://localhost:3000/register/', {
                method: 'POST',
                mode: 'no-cors',
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
                <h3>Register</h3>



            </div>
            <div className="loginBox">

                <ul className="list">

                    <li><label htmlFor="username"> Enter Name</label>
                        <input name="username" id="registerName" type="text" placeholder="Name" /></li>
                    <li><label htmlFor="Email"> Enter Email</label>
                        <input name="Email" id="registerEmail" type="email" placeholder="Email" /></li>
                    <li><label htmlFor="Password">Create Password</label>
                        <input name="Password" id="registerPassword" type="password" placeholder="Password" /></li>
                </ul>
                <button onClick={register}>Register</button>




            </div>
        </div>

    );


}
export default Login;