import React, { Component } from "react";
import {
    Card,
    CardHeader,
    CardMedia,
    CardTitle,
    CardText
} from "material-ui/Card";
import { Row, Col } from "react-flexbox-grid";
import Fixtures from "./Fixtures";
import Paper from "material-ui/Paper";
import Players from "./Payers";

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
        maxWidth: "1500px",
        margin: "20px auto 10px",
        textAlign: "center"
    }
};

export default class Team extends Component {
    state = {
        stype: {
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
        },
        teamInfo: []
    };

    componentDidMount() {
        fetch("http://api.football-data.org/v1/teams/" + 66, {
            method: "GET",
            headers: {
                "X-Auth-Token": "d7b8cab537374ee98c55d368fb7bc97c"
            }
        })
            .then(results => {
                return results.json();
            })
            .then(data => {
                let teamInfo = <TeamCard teamInfo={data} />;
                this.setState({ teamInfo: teamInfo });
            })
            .catch(error => {
                console.error(error);
            });
    }
    render() {
        return (
            <div>
                <Paper style={styles.paperStye} zDepth={0} rounded={false}>
                    <Row>
                        <Col xs={12}>
                            <Row center="xs">
                                <Col xs={12}>{this.state.teamInfo}</Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <Row start="xs">
                                <Col xs={6}>
                                    <Players teamID={66} />
                                </Col>
                                <Col xs={6}>
                                    <Fixtures teamID={66} />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Paper>
            </div>
        );
    }
}

const TeamCard = props => (
    <div>
        <Card>
            <CardHeader
                title="Team Overview"
                subtitle="Subtitle"
                avatar={props.teamInfo.crestUrl}
            />
            <CardMedia
                overlay={
                    <CardTitle
                        title={props.teamInfo.name}
                        subtitle="Overlay subtitle"
                    />
                }
            >
                <img
                    src="https://i2-prod.manchestereveningnews.co.uk/incoming/article12211477.ece/ALTERNATES/s1200/GettyImages-624342376.jpg"
                    alt=""
                />
            </CardMedia>
            <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam
                sed pellentesque. Aliquam dui mauris, mattis quis lacus id,
                pellentesque lobortis odio.
            </CardText>
        </Card>
    </div>
);
