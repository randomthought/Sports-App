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
    height: "300px"
  };

  handleToggle = (event, toggled) => {
    this.setState({
      [event.target.name]: toggled
    });
  };

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
            onCellClick={event => console.log(data.standing[event])}
          >
            <TableHeader
              displaySelectAll={this.state.showCheckboxes}
              adjustForCheckbox={this.state.showCheckboxes}
              enableSelectAll={this.state.enableSelectAll}
            >
              <TableRow>
                <TableHeaderColumn colSpan="7" style={{ textAlign: "center" }}>
                  {data.leagueCaption}
                </TableHeaderColumn>
              </TableRow>
              <TableRow>
                <TableHeaderColumn />
                <TableHeaderColumn>Club</TableHeaderColumn>
                <TableHeaderColumn>Rank</TableHeaderColumn>
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
                    <Avatar src={row.crestURI} backgroundColor="white" />
                  </TableRowColumn>
                  <TableRowColumn>{row.team}</TableRowColumn>
                  <TableRowColumn>{row.rank}</TableRowColumn>
                  <TableRowColumn>{row.points}</TableRowColumn>
                  <TableRowColumn>{row.playedGames}</TableRowColumn>
                  <TableRowColumn>{row.goals}</TableRowColumn>
                  <TableRowColumn>{row.goalsAgainst}</TableRowColumn>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}

const tableData = [
  {
    name: "John Smith",
    status: "Employed"
  },
  {
    name: "Randal White",
    status: "Unemployed"
  },
  {
    name: "Stephanie Sanders",
    status: "Employed"
  }
];

const data = {
  leagueCaption: "Premier League 2015/16",
  matchday: 10,
  standing: [
    {
      rank: 1,
      team: "ManCity",
      teamId: 65,
      playedGames: 10,
      crestURI: "http://upload.wikimedia.org/wikipedia/de/f/fd/ManCity.svg",
      points: 22,
      goals: 24,
      goalsAgainst: 8,
      goalDifference: 16
    },
    {
      rank: 2,
      team: "Arsenal",
      teamId: 57,
      playedGames: 10,
      crestURI: "http://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg",
      points: 22,
      goals: 18,
      goalsAgainst: 8,
      goalDifference: 10
    },
    {
      rank: 3,
      team: "West Ham",
      teamId: 563,
      playedGames: 10,
      crestURI:
        "http://upload.wikimedia.org/wikipedia/de/e/e0/West_Ham_United_FC.svg",
      points: 20,
      goals: 22,
      goalsAgainst: 13,
      goalDifference: 9
    },
    {
      rank: 4,
      team: "ManU",
      teamId: 66,
      playedGames: 10,
      crestURI:
        "http://upload.wikimedia.org/wikipedia/de/d/da/Manchester_United_FC.svg",
      points: 20,
      goals: 15,
      goalsAgainst: 8,
      goalDifference: 7
    }
  ]
};
