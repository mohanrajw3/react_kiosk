import React from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Button from '@material-ui/core/Button';
import {withStyles} from '@material-ui/core/styles';
import {Link} from "react-router-dom";


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


    render() {


        return (
            <div>
                <MuiThemeProvider>
                    <React.Fragment>
                        <div>
                            <AppBar
                                title="App Homescreen"
                            />
                        </div>

                        <Button variant="contained" className="w-60" size="large" color="primary"> Teacher - Check in
                            <Link className="linkRef" to="/teacher"/>
                        </Button>
                    </React.Fragment>

                </MuiThemeProvider>
            </div>
        );
    }


}


