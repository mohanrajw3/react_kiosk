import React from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from '@material-ui/core/Typography';
import Moment from 'react-moment';


export class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            hours: '',
            minute: '',
            dateToFormat: Moment
        }
    }

    componentDidMount() {

    }

    componentWillMount() {
        this.setState({
            dateToFormat: Moment
        })
    }


    render() {


        return (
            <div>
                <MuiThemeProvider>
                    <React.Fragment>
                        <div>
                            <AppBar
                                title="Skooly Kiosk"
                            />
                        </div>

                        <div className={"schoolCard"}>
                            <Card>
                                <div>
                                    <CardMedia className={"schoolLogo"}
                                               image={require("../assets/images/school.svg")}
                                               title="Live from space album cover"
                                    />
                                    <CardContent>
                                        <Typography component="h5" variant="h5">
                                            Welcome to Grassroots
                                        </Typography>
                                        <Typography variant="subtitle1" color="textSecondary">
                                            <Moment className={"currentTime"} format={'dddd, MMMM D, YYYY HH:MM:ss'}
                                                    interval={100}>
                                                {this.dateToFormat}
                                            </Moment>
                                        </Typography>
                                    </CardContent>
                                </div>
                            </Card>

                        </div>
                        <div className={"btnWrapper"}>
                            <Button variant="outlined"  className={"teacherCheckInBtn"} size="large" color="primary">
                                Teacher - Check in
                                <Link className="linkRef" to="/teacher"/>
                            </Button>
                            <br/>
                            <br/>
                            <br/>
                            <Button variant="outlined"  className={"studentCheckInBtn"} size="large" color="primary">
                                Student - Check in
                                <Link className="linkRef" to="/student"/>
                            </Button>
                        </div>
                    </React.Fragment>

                </MuiThemeProvider>
            </div>
        );
    }


}


