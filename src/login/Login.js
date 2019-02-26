import React from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {LOGIN_API} from "../constants/AppConstants";
import axiosUtil from '../axiosutil/AxiosUtil';
import {fakeauth} from '../auth/Auth-Process-Filter';
import {Redirect} from "react-router";


const style = {
    margin: 15,
};

const postLogin = localStorage.getItem("postLogin");


export class Login extends React.Component {



    constructor(props) {
        super(props);
        this.state = {
            emailId: '',
            password: '',
            channel: 'W'
        }
    }

    componentDidMount() {

    }


    handleClick(event) {

        let userDetails = {
            emailId: this.state.emailId,
            password: this.state.password,
            channel: "W"
        };

        return axiosUtil.POST(LOGIN_API, userDetails).then(value => {
            fakeauth.authenticate(() => {
                localStorage.setItem("postLogin","true");
                localStorage.setItem("token",value.data.userToken.token);
                localStorage.setItem("schoolid",value.data.userToken.schoolIntId);
                this.setState({redirectToReferrer: true});
            });
        });


    }


    render() {


        const { from } = this.props.location.state || { from: { pathname: "/Login" } };


        if (postLogin) {
            return <Redirect to={'/Home'}/>;
        }else {
            return (
                <div>
                    <MuiThemeProvider>
                        <div>

                        <AppBar title="App Homescreen"/>

                            <TextField
                                hintText="Enter your email"
                                floatingLabelText="email"
                                onChange={(event, newValue) => this.setState({emailId: newValue})}
                            />
                            <br/>
                            <TextField
                                type="password"
                                hintText="Enter your Password"
                                floatingLabelText="Password"
                                onChange={(event, newValue) => this.setState({password: newValue})}
                            />
                            <br/>

                            <RaisedButton label="Submit" primary={true} style={style}
                                          onClick={(event) => this.handleClick(event)}/>

                        </div>
                    </MuiThemeProvider>
                </div>
            );
        }
    }


}

