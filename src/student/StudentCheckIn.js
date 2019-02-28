import React from "react";
import AppBar from 'material-ui/AppBar';
import {Facebook} from "react-content-loader";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NativeSelect from '@material-ui/core/NativeSelect';
import axiosUtil from "../axiosutil/AxiosUtil";
import {GRADESECTION_API, TEACHER_API} from "../constants/AppConstants";
import Input from "@material-ui/core/Input";
import {GradeSectionDropdown} from "./GradeSectionDropdown";
import {Select} from "@material-ui/core";


export class StudentCheckIn extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: false
        }
    }

    componentWillMount() {

    }


    render() {


        return (
            <MuiThemeProvider>

                <React.Fragment>

                    <AppBar title="App Homescreen"/>


                    <div>
                              <GradeSectionDropdown/>


                    </div>

                </React.Fragment>

            </MuiThemeProvider>
        )


    }

}


