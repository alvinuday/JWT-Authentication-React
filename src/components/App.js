import React from 'react'
import '../styles/App.css';
import Login from '../routes/login'
import Register from '../routes/register'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
const App = () => {

  return (
    <div id="main">
      <Router>
      <h1 className="heading">JWT Authentication</h1>
      <div className="Wrapper">
            <Routes>
            <Route path='/' component={HomePage}/>
            <Route path='/login' component={Login}/>
            <Route path='/register' component={Register}/>
            </Routes>

      </div>
        </Router>
    </div>
  )
}

const HomePage = ()=> {
  return (
  <div>
    <h1>Home Page</h1>
  </div>
  );
}

export default App;
