import React, { Component } from "react";
import {
    Table,
    TableBody,
    TableFooter,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn
} from "material-ui/Table";
import TextField from "material-ui/TextField";
import Toggle from "material-ui/Toggle";
import Avatar from "material-ui/Avatar";
import Paper from "material-ui/Paper";

const styles = {
    propContainer: {
        width: 200,
        overflow: "hidden",
        margin: "20px auto 0"
    },
    propToggleHeader: {
        margin: "20px auto 10px"
    },
    paperStye: {
        margin: 10,
        textAlign: "center"
    }
};

/**
 * A simple table demonstrating the hierarchy of the `Table` component and its sub-components.
 */
export default class Players extends Component {
    state = {
        fixedHeader: true,
        fixedFooter: true,
        stripedRows: false,
        showRowHover: false,
        selectable: true,
        multiSelectable: false,
        enableSelectAll: false,
        deselectOnClickaway: true,
        showCheckboxes: false,
        playrs: {},
        height: "auto"
    };

    handleToggle = (event, toggled) => {
        this.setState({
            [event.target.name]: toggled
        });
    };

    componentDidMount() {
        fetch("http://api.football-data.org/v1/teams/" + 66 + "/players", {
            method: "GET",
            headers: {
                "X-Auth-Token": "d7b8cab537374ee98c55d368fb7bc97c"
            }
        })
            .then(results => {
                return results.json();
            })
            .then(data => {
                let players = data.players.map((row, index) => (
                    <TableRow key={index}>
                        <TableRowColumn>{row.name}</TableRowColumn>
                        <TableRowColumn>{row.position}</TableRowColumn>
                        <TableRowColumn>{row.jerseyNumber}</TableRowColumn>
                    </TableRow>
                ));

                this.setState({ players: players });
            })
            .catch(error => {
                console.error(error);
            });
    }

    handleChange = event => {
        this.setState({ height: event.target.value });
    };

    render() {
        return (
            <div>
                <Paper style={styles.paperStye} zDepth={1} rounded={false}>
                    <Table
                        height={this.state.height}
                        fixedHeader={this.state.fixedHeader}
                        fixedFooter={this.state.fixedFooter}
                        selectable={this.state.selectable}
                        multiSelectable={this.state.multiSelectable}
                    >
                        <TableHeader
                            displaySelectAll={this.state.showCheckboxes}
                            adjustForCheckbox={this.state.showCheckboxes}
                            enableSelectAll={this.state.enableSelectAll}
                        >
                            <TableRow>
                                <TableHeaderColumn
                                    colSpan="3"
                                    style={{ textAlign: "center" }}
                                >
                                    Players
                                </TableHeaderColumn>
                            </TableRow>
                            <TableRow>
                                <TableHeaderColumn>Name</TableHeaderColumn>
                                <TableHeaderColumn>Position</TableHeaderColumn>
                                <TableHeaderColumn>Number</TableHeaderColumn>
                            </TableRow>
                        </TableHeader>
                        <TableBody
                            displayRowCheckbox={this.state.showCheckboxes}
                            deselectOnClickaway={this.state.deselectOnClickaway}
                            showRowHover={this.state.showRowHover}
                            stripedRows={this.state.stripedRows}
                        >
                            {this.state.players}
                        </TableBody>
                    </Table>
                </Paper>
            </div>
        );
    }
}
