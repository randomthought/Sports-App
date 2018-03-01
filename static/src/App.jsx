import React, { Component } from "react";
import "./App.css";
import AppBar from "material-ui/AppBar";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Drawer from "material-ui/Drawer";
import MenuItem from "material-ui/MenuItem";
import { Route, Redirect, Link } from "react-router-dom";
import LeageTable from "./routes/LeageTable.jsx";
import Paper from "material-ui/Paper";

const paperStyle = {
    margin: 20,
    textAlign: "center"
};

class App extends Component {
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
                        <MenuItem>
                            <Link to="/table">Leage Table</Link>
                        </MenuItem>
                    </Drawer>
                    <Route exact path="/" render={() => <Home />} />
                    <Route path="/dashboard" render={() => <Dashboard />} />
                    <Route path="/table" render={() => <LeageTable />} />
                    <Route path="/team" render={() => <Team />} />
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
