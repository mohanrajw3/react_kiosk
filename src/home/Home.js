import React from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {LOGIN_API} from "../constants/AppConstants";
import axiosUtil from '../axiosutil/AxiosUtil';


const style = {
    margin: 15,
};

export class Home extends React.Component {

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
            console.log(value)
        });


    }


    render() {
        return (
            <div>
                <MuiThemeProvider>
                    <div>
                        <AppBar
                            title="App Homescreen"
                        />
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }


}
