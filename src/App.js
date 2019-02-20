import React, {Component} from 'react';
import './App.css';
import {Login} from "./login/Login";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Home} from "./home/Home";
import {Redirect} from "react-router";


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


const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            fakeAuth.isAuthenticated ? (
                <Home />
            ) : (
                <Redirect
                    to={{
                        pathname: "/login",
                        state: { from: props.location }
                    }}
                />
            )
        }
    />
);


const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
        this.isAuthenticated = true;
        setTimeout(cb, 100); // fake async
    },
    signout(cb) {
        this.isAuthenticated = false;
        setTimeout(cb, 100);
    }
};


export default App;

