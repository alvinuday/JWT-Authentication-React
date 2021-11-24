import React from 'react';  
import ReactDOM from 'react-dom';  
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'  
import App from './components/App';
import './styles/App.css'  
  
sessionStorage.setItem("users","");
const routing = (  
  <Router>  
    <div>  
      <h1 className="heading">JWT Authentication</h1> 
      <Route path="/" component={App} />  
      {/* <Route path="/Register" component={Register} />   */}
      {/* <Route path="/Login" component={Login} />   */}
    </div>  
  </Router>  
)

ReactDOM.render(routing, document.getElementById('root'));  