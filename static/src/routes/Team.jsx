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

const pictures = {
    "Manchester City FC":
        "https://mediacdn.mancity.com/-/media/matches/first-team/season-1718/home/city-v-southampton/goal-1-celebration-team.ashx?width=1280",
    "Liverpool FC":
        "https://d3j2s6hdd6a7rg.cloudfront.net/v2/uploads/media/default/0001/60/thumb_59056_default_news_size_5.jpeg",
    "Manchester United FC":
        "https://i2-prod.manchestereveningnews.co.uk/incoming/article12211477.ece/ALTERNATES/s1200/GettyImages-624342376.jpg",
    "Tottenham Hotspur FC": "",
    "Chelsea FC":
        "https://i2-prod.manchestereveningnews.co.uk/incoming/article12211477.ece/ALTERNATES/s1200/GettyImages-624342376.jpg",
    "Arsenal FC": "http://nilepost.co.ug/wp-content/uploads/2018/02/arse.jpg",
    "Burnley FC": "http://1x2picks.co/wp-content/uploads/2016/07/Burnley.jpg",
    "Leicester City FC":
        "http://dailypost.ng/wp-content/uploads/2017/03/Ndidi-Albrighton-Leicester-City-Sevilla-Mar2017.jpg",
    "Watford FC":
        "https://www.watfordfc.com/sites/default/files/2017-01/SPORTcozziWATFORD2866_2.jpg",
    "Brighton & Hove Albion":
        "http://e1.365dm.com/18/01/16-9/20/skysports-anthony-knockaert-brighton-premier-league_4195943.jpg?20180101130331",
    "Everton FC":
        "https://www.kawowo.com/wp-content/uploads/2017/05/Everton.jpg",
    "AFC Bournemouth":
        "https://footballvideohighlights.com/uploads/thumbs/0bd362ac1-1.jpg",
    "Swansea City FC":
        "https://www.101greatgoals.com/wp-content/uploads/2017/12/GettyImages-888872894.jpg",
    "West Ham United FC":
        "https://panopticon.pt/wp-content/uploads/2017/09/West-Ham-2-0-Huddersfield.jpg",
    "Huddersfield Town":
        "http://www.soccerhighlightstoday.com/wp-content/uploads/2017/12/JS113845296.jpg",
    "Newcastle United FC":
        "https://static.foba1.com/bilder/teamfotos/640x360/546.jpg",
    "Southampton FC":
        "http://www.nanyangchronicle.ntu.edu.sg/wp-content/uploads/2015/01/soton2.jpg",
    "Crystal Palace FC":
        "https://www.cpfc.co.uk/siteassets/images/player-photos-201617/huddle.jpg/Large",
    "Stoke City FC":
        "https://www.thesun.co.uk/wp-content/uploads/2017/03/nintchdbpict000309823975.jpg?strip=all&w=960",
    "West Bromwich Albion FC":
        "http://d2x51gyc4ptf2q.cloudfront.net/content/uploads/2017/01/GettyImages.632286810.000.jpg"
};

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
        maxWidth: "1200px",
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
        fetch(
            "http://api.football-data.org/v1/teams/" +
                this.props.match.params.teamID,
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
                                    <Players
                                        teamID={this.props.match.params.teamID}
                                    />
                                </Col>
                                <Col xs={6}>
                                    <Fixtures
                                        teamID={this.props.match.params.teamID}
                                    />
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
                <img src={pictures[props.teamInfo.name]} alt="" />
            </CardMedia>
            <CardText>Sports-App team profile</CardText>
        </Card>
    </div>
);
