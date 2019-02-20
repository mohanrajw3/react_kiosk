import React from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Button from '@material-ui/core/Button';
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import ContentLoader, {Facebook} from "react-content-loader";
import {TEACHER_API} from "../constants/AppConstants";
import axiosUtil from "../axiosutil/AxiosUtil";


const MyLoader = () => <ContentLoader/>

export class Teacher_Checkin extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            "data": false
        }
    }

    componentWillMount() {
        axiosUtil.GET(TEACHER_API).then(response => {

            this.setState({
                data: true,
                teachers: response.data.teacherList
            })

        });
    }

    componentDidMount() {


    }

    renderTeachers() {

        return this.state.teachers.map(data =>

            <div className={"teacherWrapper"}>
                <Card className={"teacherCard"}>

                    <CardMedia className={"teacherDp"}
                               image={require("../assets/images/school.svg")}
                               title="Live from space album cover"
                    />
                    <CardContentṅ>
                        <Typography className={"teacherName"} component="h5" variant="h5">
                            {data.name}
                        </Typography>
                    </CardContentṅ>
                    <div className={"checkInWrapper"}>
                        <Button className={"teacherCheckin"} variant="outlined" color="primary">
                            <p className={"ckinTxt"}>Check In</p>
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


