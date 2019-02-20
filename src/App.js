import React, {Component} from 'react';
import './App.css';
import {Login} from "./login/Login";
import {BrowserRouter as Router, Route, Link, Redirect} from "react-router-dom";
import {Home} from "./home/Home";
import PrivateRoute from "./auth/PrivateRoute";
import {Teacher_Checkin} from "./teacher_checkin/Teacher_Checkin";
import AppBar from "@material-ui/core/AppBar";


class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <div className="App">
                        <Route path="/login" component={Login}/>
                        <PrivateRoute path="/home" component={Home}/>
                        <PrivateRoute path="/teacher" component={Teacher_Checkin}/>
                    </div>
                </Router>
            </div>
        );
    }
}


export default App;

