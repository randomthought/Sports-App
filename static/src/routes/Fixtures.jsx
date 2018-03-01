import React, { Component } from "react";
import { List } from "material-ui/List";
import { Card, CardHeader, CardText } from "material-ui/Card";

export default class Fixtures extends Component {
    state = {
        styles: {
            propContainer: {
                width: 200,
                overflow: "hidden",
                margin: "20px auto 0"
            },
            propToggleHeader: {
                margin: "20px auto 10px"
            }
        },
        fixtures: []
    };

    componentDidMount() {
        fetch(
            "http://api.football-data.org/v1/teams/" +
                this.props.teamID +
                "/fixtures",
            {
                method: "GET",
                headers: {
                    "X-Auth-Token": "d7b8cab537374ee98c55d368fb7bc97c"
                }
            }
        )
            .then(results => {
                return results.json();
            })
            .then(data => {
                let fixtures = data.fixtures
                    .filter(item => item.status === "SCHEDULED")
                    .map((item, index) => (
                        <List key={index}>
                            <Card>
                                <CardHeader
                                    title={
                                        item.homeTeamName +
                                        " vs " +
                                        item.awayTeamName
                                    }
                                    subtitle={item.date}
                                    actAsExpander={true}
                                    showExpandableButton={true}
                                />
                                <CardText expandable={true}>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Donec mattis pretium massa.
                                    Aliquam erat volutpat. Nulla facilisi. Donec
                                    vulputate interdum sollicitudin. Nunc
                                    lacinia auctor quam sed pellentesque.
                                    Aliquam dui mauris, mattis quis lacus id,
                                    pellentesque lobortis odio.
                                </CardText>
                            </Card>
                        </List>
                    ));

                this.setState({ fixtures: fixtures });
            })
            .catch(error => {
                console.error(error);
            });
    }

    render() {
        return <div>{this.state.fixtures}</div>;
    }
}
