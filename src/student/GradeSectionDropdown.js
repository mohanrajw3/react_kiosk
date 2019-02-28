import {Component} from "react";
import React from "react";
import Card from "../teacher_checkin/Teacher_Checkin";
import AxiosUtil from "../axiosutil/AxiosUtil";
import {GRADESECTION_API, TEACHER_API} from "../constants/AppConstants";
import {Facebook} from "react-content-loader";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import AppBar from "@material-ui/core/AppBar";


export class GradeSectionDropdown extends Component {


    constructor(props) {
        super(props);
        this.state = {
            data: false,
            classrooms: ''
        }
    }


    componentWillMount() {
        AxiosUtil.GET(GRADESECTION_API).then(response => {
            this.setState({
                data: true,
                classrooms: response.data.gradeSections
            })

        });
    }


    componentWillReceiveProps(nextProps, nextContext) {


    }


    renderGradeSectionDropdown() {

        if (this.state.classrooms.length > 0) {

            return this.state.classrooms.map(data =>
                <option key={data.gradeSectionIntId} value={data.gradeSectionIntId}>{data.grade}
                    {data.section}
                </option>
            );
        }

    }


    render() {

        if(this.state.classrooms.length > 0) {

            return (
                <div>
                    <select>
                        {this.renderGradeSectionDropdown()}
                    </select>

                </div>
            );
        }else{
            return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="App Homescreen"/>
                    <Facebook/>
                </React.Fragment>
            </MuiThemeProvider>
            );


        }


    }


}