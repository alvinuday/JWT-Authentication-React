import React, {useState} from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import '../styles/Login.css';
import { registerApi } from '../components/api'
function Register() {
    const [loggedIn, setLogin] = useState(false);
    async function register() {

        try {
            const data = {
                name: document.getElementById('registerName').value,
                email: document.getElementById('registerEmail').value,
                password: document.getElementById('registerPassword').value
            };
            // console.log("clicked")
            // let response = await fetch('http://localhost:3000/register/', {
            //     method: 'POST',
            //     mode: 'no-cors',
            //     body: JSON.stringify(data)
            // });
            // console.log(data);
            // return await response.json();
            registerApi(data).then(() => {
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
    if (loggedIn) {
        return <Redirect to="/Protected" />;
    }
    return (
        <div className="wrapper">
            <div className="heading">
                <h3>Register</h3>
            </div>
            <div className="loginBox">
                <form>

                    <ul className="list">

                        <li><label htmlFor="username"> Enter Name</label>
                            <input name="username" id="registerName" type="text" placeholder="Name" /></li>
                        <li><label htmlFor="Email"> Enter Email</label>
                            <input name="Email" id="registerEmail" type="email" placeholder="Email" /></li>
                        <li><label htmlFor="Password">Create Password</label>
                            <input name="Password" id="registerPassword" type="password" placeholder="Password" /></li>
                    </ul>
                    <button type="button" id="register_button" onClick={register}>Register</button>

                </form>


            </div>
        </div>

    );


}
export default Register;