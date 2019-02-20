import React, {Component} from 'react';
import './App.css';
import {Login} from "./login/Login";
import { BrowserRouter as Router, Route, Link,Redirect } from "react-router-dom";
import {Home} from "./home/Home";
import PrivateRoute from "./auth/PrivateRoute";


class App extends Component {
    render() {
        return (
            <Router>
            <div className="App">
                <Route path="/login" component={Login} />
                <PrivateRoute path="/home" component={Home} />
            </div>
            </Router>
        );
    }
}


export default App;

