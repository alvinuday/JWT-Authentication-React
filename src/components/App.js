import React from 'react'  
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Register from '../routes/register'  
import Login from '../routes/login'
import Protected from '../routes/protected'
import '../styles/App.css' 
class App extends React.Component {  
  render() {  
    return (  
      <div> 
        <Router>  
    <div> 
      <div className="buttons">
      <Link id="login_link" to='/login'>Login </Link>|| 
      <Link id="register_link" to='/register'> Register </Link>
        </div> 
      <Route path="/Register" component={Register} />  
      <Route path="/Login" component={Login} />  
      <Route path="/Protected" component={Protected} />  
    </div>  
  </Router>
      </div>  
    )  
  }  
}  
export default App  
