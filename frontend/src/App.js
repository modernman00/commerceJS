import React from 'react';
import { Switch,  BrowserRouter as Router, Route } from "react-router-dom"
import './App.css';
import Home from "./components/home/Home"
import {Register} from "./components/account/Register"
// import SignUp from "./components/account/SignUp"
import SignIn from "./components/account/SignIn"
import NotFound from "./components/NotFound"
import Navigator from "./components/Navigator"
import "bootstrap/dist/css/bootstrap.min.css"


const App = () => {
  return (
     <Router>
      <Navigator/>
      <br/>  
      <Switch>    
      <Route exact path="/" component={Home}/>
      {/* <Route exact path="/register" component={SignUp}/> */}
      <Route exact path="/register" component={Register}/>
      <Route exact path="/login" component={SignIn}/>
      <Route component={ NotFound }/>

      </Switch>
    </Router>
  );
}

export default App;
