import {Redirect, Route} from "react-router-dom";
import React from "react";


const postLogin = localStorage.getItem("postLogin");

const PrivateRoute = ({component: Component, ...rest}) => (


    <Route
        {...rest}
        render={props =>
            postLogin ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: "/Login",
                        state: {from: props.location}
                    }}
                />
            )
        }
    />
);

export default PrivateRoute;