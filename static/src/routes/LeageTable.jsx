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
    }
};

/**
 * A simple table demonstrating the hierarchy of the `Table` component and its sub-components.
 */
export default class LeageTable extends Component {
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
        table: []
    };

    handleToggle = (event, toggled) => {
        this.setState({
            [event.target.name]: toggled
        });
    };

    handleChange = event => {
        this.setState({ height: event.target.value });
    };

    componentDidMount() {
        fetch("http://api.football-data.org/v1/soccerseasons/445/leagueTable", {
            method: "GET",
            headers: {
                "X-Auth-Token": ""
            }
        })
            .then(results => {
                return results.json();
            })
            .then(data => {
                let table = (
                    <Table
                        height={this.state.height}
                        fixedHeader={this.state.fixedHeader}
                        fixedFooter={this.state.fixedFooter}
                        selectable={this.state.selectable}
                        multiSelectable={this.state.multiSelectable}
                        onCellClick={event => console.log(data.standing[event])}
                    >
                        <TableHeader
                            displaySelectAll={this.state.showCheckboxes}
                            adjustForCheckbox={this.state.showCheckboxes}
                            enableSelectAll={this.state.enableSelectAll}
                        >
                            <TableRow>
                                <TableHeaderColumn
                                    colSpan="7"
                                    style={{ textAlign: "center" }}
                                >
                                    {data.leagueCaption}
                                </TableHeaderColumn>
                            </TableRow>
                            <TableRow>
                                <TableHeaderColumn />
                                <TableHeaderColumn>Club</TableHeaderColumn>
                                <TableHeaderColumn>Position</TableHeaderColumn>
                                <TableHeaderColumn>Poins</TableHeaderColumn>
                                <TableHeaderColumn>GP</TableHeaderColumn>
                                <TableHeaderColumn>Goals</TableHeaderColumn>
                                <TableHeaderColumn>GC</TableHeaderColumn>
                            </TableRow>
                        </TableHeader>
                        <TableBody
                            displayRowCheckbox={this.state.showCheckboxes}
                            deselectOnClickaway={this.state.deselectOnClickaway}
                            showRowHover={this.state.showRowHover}
                            stripedRows={this.state.stripedRows}
                        >
                            {data.standing.map((row, index) => (
                                <TableRow key={index}>
                                    <TableRowColumn>
                                        <Avatar
                                            src={row.crestURI}
                                            backgroundColor="white"
                                        />
                                    </TableRowColumn>
                                    <TableRowColumn>
                                        {row.teamName}
                                    </TableRowColumn>
                                    <TableRowColumn>
                                        {row.position}
                                    </TableRowColumn>
                                    <TableRowColumn>
                                        {row.points}
                                    </TableRowColumn>
                                    <TableRowColumn>
                                        {row.playedGames}
                                    </TableRowColumn>
                                    <TableRowColumn>{row.goals}</TableRowColumn>
                                    <TableRowColumn>
                                        {row.goalsAgainst}
                                    </TableRowColumn>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                );

                console.log(data);

                this.setState({ table: table });
            })
            .catch(error => {
                console.error(error);
            });
    }

    render() {
        return (
            <div>
                <Paper style={styles.paperStye} zDepth={1} rounded={false}>
                    {this.state.table}
                </Paper>
            </div>
        );
    }
}