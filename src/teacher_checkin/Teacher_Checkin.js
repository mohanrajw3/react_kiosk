import React from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Button from '@material-ui/core/Button';
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {Facebook} from "react-content-loader";
import {TEACHER_API, TEACHER_CKIN, CODE_TEACHER_CKIN_SUCCESS} from "../constants/AppConstants";
import axiosUtil from "../axiosutil/AxiosUtil";


const schoolid = localStorage.getItem("schoolid");

export class Teacher_Checkin extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            "data": false,
            "statusChange": false,
            'attendanceStatus': 'Check Out'
        }
    }


    onClickCheckIn(event, data) {
        let reqBody = {
            "channel": "W",
            "phoneNo": data.phoneNo,
            "emailId": data.emailId
        };

        let status;

        if (data.attstatus && data.attstatus === "Check Out" || data.lastCheckinTime) {
            status = "SCKOUT";
        } else {
            status = "SCKIN";
        }


        axiosUtil.POST(TEACHER_CKIN + "/" + status + "/" + schoolid, reqBody).then(response => {
            console.log(response);

            if (response.data.mCode === CODE_TEACHER_CKIN_SUCCESS) {
                this.setState(attendanceStatus => {
                        const teachers = attendanceStatus.teachers.map(userData => {
                            return createStatus(userData, data)
                        });

                        return {teachers}
                    }
                )
            }

            function createStatus(userData, responseData) {
                if (userData.emailId === responseData.emailId) {
                    if (status === "SCKOUT") {
                        userData.attstatus = "Checked Out";
                    } else {
                        userData.attstatus = "Check Out";
                    }

                    return userData;
                } else {
                    return userData;
                }
            }

        });
    }

    componentWillMount() {
        axiosUtil.GET(TEACHER_API).then(response => {
            this.setState({
                data: true,
                teachers: response.data.attendances
            })

        });
    }


    renderTeachers() {

        return this.state.teachers.map(data =>

            <div className={"teacherWrapper"} key={data.name}>
                <Card className={"teacherCard"}>
                    <CardMedia className={"teacherDp"}
                               image={require("../assets/images/school.svg")}
                               title="Live from space album cover"
                    />
                    <CardContent>
                        <Typography className={"teacherName"} component="h5" variant="h5">
                            {data.name}
                        </Typography>
                    </CardContent>
                    <div className={"checkInWrapper"}>
                        <Button className={"teacherCheckin"} variant="outlined" color="primary"
                                onClick={(e) => this.onClickCheckIn(e, data)}>
                            <p className={'ckinTxt'}>
                                {data.attstatus ? data.attstatus : data.lastCheckoutTime ? "Checked out" : data.lastCheckinTime ? "Check Out " : "CheckIn"}
                            </p>
                        </Button>
                    </div>

                </Card>
                <br/>
            </div>
        );

    }


    render() {


        if (this.state.data) {

            return (
                <MuiThemeProvider>

                    <React.Fragment>

                        <AppBar title="App Homescreen"/>

                        {this.renderTeachers()}

                    </React.Fragment>

                </MuiThemeProvider>
            );
        } else {

            return (

                <MuiThemeProvider>
                    <React.Fragment>
                        <AppBar title="App Homescreen"/>
                        <Facebook/>
                    </React.Fragment>
                </MuiThemeProvider>
            )
        }

    }


}


