import React, { Component } from "react";
import "./App.css";
import AppBar from "material-ui/AppBar";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Drawer from "material-ui/Drawer";
import MenuItem from "material-ui/MenuItem";
import { Route } from "react-router-dom";
import LeageTable from "./routes/LeageTable.jsx";
import Team from "./routes/Team.jsx";
import history from "./history.jsx";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = { open: false };
    }

    handleToggle = () => this.setState({ open: !this.state.open });

    handleClose = () => this.setState({ open: false });

    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <AppBar
                        title="Sport App"
                        iconClassNameRight="muidocs-icon-navigation-expand-more"
                        onLeftIconButtonClick={this.handleToggle}
                    />

                    <Drawer
                        docked={false}
                        width={200}
                        open={this.state.open}
                        onRequestChange={open => this.setState({ open })}
                    >
                        <MenuItem
                            onClick={() => {
                                history.push("/table");
                            }}
                        >
                            Premier Leage Table
                        </MenuItem>
                    </Drawer>
                    <Route exact path="/" component={LeageTable} />
                    <Route path="/table" component={LeageTable} />
                    <Route path="/team/:teamID" component={Team} />
                </div>
            </MuiThemeProvider>
        );
    }
}
