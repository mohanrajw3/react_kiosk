import React from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Button from '@material-ui/core/Button';
import {withStyles} from '@material-ui/core/styles';
import {Link} from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import ContentLoader, {Facebook} from "react-content-loader";
import {TEACHER_API} from "../constants/AppConstants";
import axiosUtil from "../axiosutil/AxiosUtil";
import {fakeauth} from "../auth/Auth-Process-Filter";



const MyLoader = () => <ContentLoader />
const MyFacebookLoader = () => <Facebook />


export class Teacher_Checkin extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {

        axiosUtil.GET(TEACHER_API).then(value => {
            console.log(value)
            fakeauth.authenticate(() => {
                localStorage.setItem("postLogin","true");
                this.setState({redirectToReferrer: true});
            });
        });
    }


    render() {


        return (

            <MuiThemeProvider>

                <React.Fragment>

                    <AppBar title="App Homescreen"/>
                    <Card>
                        <CardActionArea>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Lizard
                                </Typography>
                                <Typography component="p">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species,
                                    ranging
                                    across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Share
                            </Button>
                            <Button size="small" color="primary">
                                Learn More
                            </Button>
                        </CardActions>
                    </Card>

                </React.Fragment>

            </MuiThemeProvider>
        );
    }


}


