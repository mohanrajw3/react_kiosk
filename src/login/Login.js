import React from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {axios,postData} from '../axiosutil/AxiosUtil';
import {LOGIN_API} from "../constants/AppConstants";




const style = {
    margin: 15,
};

export class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            emailId: '',
            password: '',
            channel: 'W'
        }
    }
    componentDidMount () {

    }


    handleClick(event) {

        let userDetails = {
            emailId: this.state.emailId,
            password: this.state.password,
            channel: "W"
        };

         postData(LOGIN_API, userDetails).then(value => {
            console.log(value)
        })  ;


    }


    render() {
        return (
            <div>
                <MuiThemeProvider>
                    <div>
                        <AppBar
                            title="Login"
                        />
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

