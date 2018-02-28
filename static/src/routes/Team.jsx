import React from "react";
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";
import IconButton from "material-ui/IconButton";
import { Grid, Row, Col } from "react-flexbox-grid";
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
    margin: 10,
    textAlign: "center"
  }
};

const Team = props => (
  <Paper style={styles.paperStye} zDepth={1} rounded={false}>
    <div>
      <Row>
        <Col xs={12}>
          <Row center="xs">
            <Col xs={12}>
              <TeamCard />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Row start="xs">
            <Col xs={6}>
              <Players playerData={playerData} />
            </Col>
            <Col xs={6}>
              <Fixtures fixturesData={fixturesData} />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  </Paper>
);

const TeamCard = () => (
  <div>
    <Card>
      <CardHeader
        title="Team Overview"
        subtitle="Subtitle"
        avatar={teamData.crestUrl}
      />
      <CardMedia
        overlay={
          <CardTitle title={teamData.name} subtitle="Overlay subtitle" />
        }
      >
        <img
          src="https://i2-prod.manchestereveningnews.co.uk/incoming/article12211477.ece/ALTERNATES/s1200/GettyImages-624342376.jpg"
          alt=""
        />
        {/*
          <img
              src="http://studiofutbol.com.ec/wp-content/uploads/2018/02/544.jpg"
              <img src="http://via.placeholder.com/350x150" alt="" />
              src=""http://via.placeholder.com/350x150""
              alt=""
              />
        */}
      </CardMedia>
      <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis
        pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate
        interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
      </CardText>
    </Card>
  </div>
);

const FixturesCard = () => <div />;

export default Team;

const fixturesData = {
  _links: {
    self: { href: "http://api.football-data.org/v1/teams/66/fixtures" },
    team: { href: "http://api.football-data.org/v1/teams/66" }
  },
  season: "2017",
  count: 46,
  fixtures: [
    {
      _links: {
        self: { href: "http://api.football-data.org/v1/fixtures/159321" },
        competition: {
          href: "http://api.football-data.org/v1/competitions/445"
        },
        homeTeam: { href: "http://api.football-data.org/v1/teams/66" },
        awayTeam: { href: "http://api.football-data.org/v1/teams/563" }
      },
      date: "2017-08-13T15:00:00Z",
      status: "FINISHED",
      matchday: 1,
      homeTeamName: "Manchester United FC",
      awayTeamName: "West Ham United FC",
      result: {
        goalsHomeTeam: 4,
        goalsAwayTeam: 0,
        halfTime: { goalsHomeTeam: 1, goalsAwayTeam: 0 }
      },
      odds: null
    },
    {
      _links: {
        self: { href: "http://api.football-data.org/v1/fixtures/159313" },
        competition: {
          href: "http://api.football-data.org/v1/competitions/445"
        },
        homeTeam: { href: "http://api.football-data.org/v1/teams/72" },
        awayTeam: { href: "http://api.football-data.org/v1/teams/66" }
      },
      date: "2017-08-19T11:30:00Z",
      status: "FINISHED",
      matchday: 2,
      homeTeamName: "Swansea City FC",
      awayTeamName: "Manchester United FC",
      result: {
        goalsHomeTeam: 0,
        goalsAwayTeam: 4,
        halfTime: { goalsHomeTeam: 0, goalsAwayTeam: 1 }
      },
      odds: null
    },
    {
      _links: {
        self: { href: "http://api.football-data.org/v1/fixtures/159301" },
        competition: {
          href: "http://api.football-data.org/v1/competitions/445"
        },
        homeTeam: { href: "http://api.football-data.org/v1/teams/66" },
        awayTeam: { href: "http://api.football-data.org/v1/teams/338" }
      },
      date: "2017-08-26T16:30:00Z",
      status: "FINISHED",
      matchday: 3,
      homeTeamName: "Manchester United FC",
      awayTeamName: "Leicester City FC",
      result: {
        goalsHomeTeam: 2,
        goalsAwayTeam: 0,
        halfTime: { goalsHomeTeam: 0, goalsAwayTeam: 0 }
      },
      odds: null
    },
    {
      _links: {
        self: { href: "http://api.football-data.org/v1/fixtures/159293" },
        competition: {
          href: "http://api.football-data.org/v1/competitions/445"
        },
        homeTeam: { href: "http://api.football-data.org/v1/teams/70" },
        awayTeam: { href: "http://api.football-data.org/v1/teams/66" }
      },
      date: "2017-09-09T16:30:00Z",
      status: "FINISHED",
      matchday: 4,
      homeTeamName: "Stoke City FC",
      awayTeamName: "Manchester United FC",
      result: {
        goalsHomeTeam: 2,
        goalsAwayTeam: 2,
        halfTime: { goalsHomeTeam: 1, goalsAwayTeam: 1 }
      },
      odds: null
    },
    {
      _links: {
        self: { href: "http://api.football-data.org/v1/fixtures/164745" },
        competition: {
          href: "http://api.football-data.org/v1/competitions/464"
        },
        homeTeam: { href: "http://api.football-data.org/v1/teams/66" },
        awayTeam: { href: "http://api.football-data.org/v1/teams/729" }
      },
      date: "2017-09-12T18:45:00Z",
      status: "FINISHED",
      matchday: 1,
      homeTeamName: "Manchester United FC",
      awayTeamName: "FC Basel",
      result: {
        goalsHomeTeam: 3,
        goalsAwayTeam: 0,
        halfTime: { goalsHomeTeam: 1, goalsAwayTeam: 0 }
      },
      odds: null
    },
    {
      _links: {
        self: { href: "http://api.football-data.org/v1/fixtures/159281" },
        competition: {
          href: "http://api.football-data.org/v1/competitions/445"
        },
        homeTeam: { href: "http://api.football-data.org/v1/teams/66" },
        awayTeam: { href: "http://api.football-data.org/v1/teams/62" }
      },
      date: "2017-09-17T15:00:00Z",
      status: "FINISHED",
      matchday: 5,
      homeTeamName: "Manchester United FC",
      awayTeamName: "Everton FC",
      result: {
        goalsHomeTeam: 4,
        goalsAwayTeam: 0,
        halfTime: { goalsHomeTeam: 1, goalsAwayTeam: 0 }
      },
      odds: null
    },
    {
      _links: {
        self: { href: "http://api.football-data.org/v1/fixtures/159272" },
        competition: {
          href: "http://api.football-data.org/v1/competitions/445"
        },
        homeTeam: { href: "http://api.football-data.org/v1/teams/340" },
        awayTeam: { href: "http://api.football-data.org/v1/teams/66" }
      },
      date: "2017-09-23T14:00:00Z",
      status: "FINISHED",
      matchday: 6,
      homeTeamName: "Southampton FC",
      awayTeamName: "Manchester United FC",
      result: {
        goalsHomeTeam: 0,
        goalsAwayTeam: 1,
        halfTime: { goalsHomeTeam: 0, goalsAwayTeam: 1 }
      },
      odds: null
    },
    {
      _links: {
        self: { href: "http://api.football-data.org/v1/fixtures/164743" },
        competition: {
          href: "http://api.football-data.org/v1/competitions/464"
        },
        homeTeam: { href: "http://api.football-data.org/v1/teams/751" },
        awayTeam: { href: "http://api.football-data.org/v1/teams/66" }
      },
      date: "2017-09-27T18:45:00Z",
      status: "FINISHED",
      matchday: 2,
      homeTeamName: "CSKA Moscow",
      awayTeamName: "Manchester United FC",
      result: {
        goalsHomeTeam: 1,
        goalsAwayTeam: 4,
        halfTime: { goalsHomeTeam: 0, goalsAwayTeam: 3 }
      },
      odds: null
    },
    {
      _links: {
        self: { href: "http://api.football-data.org/v1/fixtures/159261" },
        competition: {
          href: "http://api.football-data.org/v1/competitions/445"
        },
        homeTeam: { href: "http://api.football-data.org/v1/teams/66" },
        awayTeam: { href: "http://api.football-data.org/v1/teams/354" }
      },
      date: "2017-09-30T14:00:00Z",
      status: "FINISHED",
      matchday: 7,
      homeTeamName: "Manchester United FC",
      awayTeamName: "Crystal Palace FC",
      result: {
        goalsHomeTeam: 4,
        goalsAwayTeam: 0,
        halfTime: { goalsHomeTeam: 2, goalsAwayTeam: 0 }
      },
      odds: null
    },
    {
      _links: {
        self: { href: "http://api.football-data.org/v1/fixtures/159250" },
        competition: {
          href: "http://api.football-data.org/v1/competitions/445"
        },
        homeTeam: { href: "http://api.football-data.org/v1/teams/64" },
        awayTeam: { href: "http://api.football-data.org/v1/teams/66" }
      },
      date: "2017-10-14T11:30:00Z",
      status: "FINISHED",
      matchday: 8,
      homeTeamName: "Liverpool FC",
      awayTeamName: "Manchester United FC",
      result: {
        goalsHomeTeam: 0,
        goalsAwayTeam: 0,
        halfTime: { goalsHomeTeam: 0, goalsAwayTeam: 0 }
      },
      odds: null
    },
    {
      _links: {
        self: { href: "http://api.football-data.org/v1/fixtures/164740" },
        competition: {
          href: "http://api.football-data.org/v1/competitions/464"
        },
        homeTeam: { href: "http://api.football-data.org/v1/teams/495" },
        awayTeam: { href: "http://api.football-data.org/v1/teams/66" }
      },
      date: "2017-10-18T18:45:00Z",
      status: "FINISHED",
      matchday: 3,
      homeTeamName: "SL Benfica",
      awayTeamName: "Manchester United FC",
      result: {
        goalsHomeTeam: 0,
        goalsAwayTeam: 1,
        halfTime: { goalsHomeTeam: 0, goalsAwayTeam: 0 }
      },
      odds: null
    },
    {
      _links: {
        self: { href: "http://api.football-data.org/v1/fixtures/159238" },
        competition: {
          href: "http://api.football-data.org/v1/competitions/445"
        },
        homeTeam: { href: "http://api.football-data.org/v1/teams/394" },
        awayTeam: { href: "http://api.football-data.org/v1/teams/66" }
      },
      date: "2017-10-21T14:00:00Z",
      status: "FINISHED",
      matchday: 9,
      homeTeamName: "Huddersfield Town",
      awayTeamName: "Manchester United FC",
      result: {
        goalsHomeTeam: 2,
        goalsAwayTeam: 1,
        halfTime: { goalsHomeTeam: 2, goalsAwayTeam: 0 }
      },
      odds: null
    },
    {
      _links: {
        self: { href: "http://api.football-data.org/v1/fixtures/159233" },
        competition: {
          href: "http://api.football-data.org/v1/competitions/445"
        },
        homeTeam: { href: "http://api.football-data.org/v1/teams/66" },
        awayTeam: { href: "http://api.football-data.org/v1/teams/73" }
      },
      date: "2017-10-28T11:30:00Z",
      status: "FINISHED",
      matchday: 10,
      homeTeamName: "Manchester United FC",
      awayTeamName: "Tottenham Hotspur FC",
      result: {
        goalsHomeTeam: 1,
        goalsAwayTeam: 0,
        halfTime: { goalsHomeTeam: 0, goalsAwayTeam: 0 }
      },
      odds: null
    },
    {
      _links: {
        self: { href: "http://api.football-data.org/v1/fixtures/164739" },
        competition: {
          href: "http://api.football-data.org/v1/competitions/464"
        },
        homeTeam: { href: "http://api.football-data.org/v1/teams/66" },
        awayTeam: { href: "http://api.football-data.org/v1/teams/495" }
      },
      date: "2017-10-31T20:45:00Z",
      status: "FINISHED",
      matchday: 4,
      homeTeamName: "Manchester United FC",
      awayTeamName: "SL Benfica",
      result: {
        goalsHomeTeam: 2,
        goalsAwayTeam: 0,
        halfTime: { goalsHomeTeam: 1, goalsAwayTeam: 0 }
      },
      odds: null
    },
    {
      _links: {
        self: { href: "http://api.football-data.org/v1/fixtures/159216" },
        competition: {
          href: "http://api.football-data.org/v1/competitions/445"
        },
        homeTeam: { href: "http://api.football-data.org/v1/teams/61" },
        awayTeam: { href: "http://api.football-data.org/v1/teams/66" }
      },
      date: "2017-11-05T17:30:00Z",
      status: "FINISHED",
      matchday: 11,
      homeTeamName: "Chelsea FC",
      awayTeamName: "Manchester United FC",
      result: {
        goalsHomeTeam: 1,
        goalsAwayTeam: 0,
        halfTime: { goalsHomeTeam: 0, goalsAwayTeam: 0 }
      },
      odds: null
    },
    {
      _links: {
        self: { href: "http://api.football-data.org/v1/fixtures/159213" },
        competition: {
          href: "http://api.football-data.org/v1/competitions/445"
        },
        homeTeam: { href: "http://api.football-data.org/v1/teams/66" },
        awayTeam: { href: "http://api.football-data.org/v1/teams/67" }
      },
      date: "2017-11-18T18:30:00Z",
      status: "FINISHED",
      matchday: 12,
      homeTeamName: "Manchester United FC",
      awayTeamName: "Newcastle United FC",
      result: {
        goalsHomeTeam: 4,
        goalsAwayTeam: 1,
        halfTime: { goalsHomeTeam: 2, goalsAwayTeam: 1 }
      },
      odds: null
    },
    {
      _links: {
        self: { href: "http://api.football-data.org/v1/fixtures/164736" },
        competition: {
          href: "http://api.football-data.org/v1/competitions/464"
        },
        homeTeam: { href: "http://api.football-data.org/v1/teams/729" },
        awayTeam: { href: "http://api.football-data.org/v1/teams/66" }
      },
      date: "2017-11-22T19:45:00Z",
      status: "FINISHED",
      matchday: 5,
      homeTeamName: "FC Basel",
      awayTeamName: "Manchester United FC",
      result: { goalsHomeTeam: 1, goalsAwayTeam: 0 },
      odds: null
    },
    {
      _links: {
        self: { href: "http://api.football-data.org/v1/fixtures/159200" },
        competition: {
          href: "http://api.football-data.org/v1/competitions/445"
        },
        homeTeam: { href: "http://api.football-data.org/v1/teams/66" },
        awayTeam: { href: "http://api.football-data.org/v1/teams/397" }
      },
      date: "2017-11-25T16:00:00Z",
      status: "FINISHED",
      matchday: 13,
      homeTeamName: "Manchester United FC",
      awayTeamName: "Brighton & Hove Albion",
      result: {
        goalsHomeTeam: 1,
        goalsAwayTeam: 0,
        halfTime: { goalsHomeTeam: 0, goalsAwayTeam: 0 }
      },
      odds: null
    },
    {
      _links: {
        self: { href: "http://api.football-data.org/v1/fixtures/159195" },
        competition: {
          href: "http://api.football-data.org/v1/competitions/445"
        },
        homeTeam: { href: "http://api.football-data.org/v1/teams/346" },
        awayTeam: { href: "http://api.football-data.org/v1/teams/66" }
      },
      date: "2017-11-28T21:00:00Z",
      status: "FINISHED",
      matchday: 14,
      homeTeamName: "Watford FC",
      awayTeamName: "Manchester United FC",
      result: {
        goalsHomeTeam: 2,
        goalsAwayTeam: 4,
        halfTime: { goalsHomeTeam: 0, goalsAwayTeam: 3 }
      },
      odds: null
    },
    {
      _links: {
        self: { href: "http://api.football-data.org/v1/fixtures/159177" },
        competition: {
          href: "http://api.football-data.org/v1/competitions/445"
        },
        homeTeam: { href: "http://api.football-data.org/v1/teams/57" },
        awayTeam: { href: "http://api.football-data.org/v1/teams/66" }
      },
      date: "2017-12-02T18:30:00Z",
      status: "FINISHED",
      matchday: 15,
      homeTeamName: "Arsenal FC",
      awayTeamName: "Manchester United FC",
      result: {
        goalsHomeTeam: 1,
        goalsAwayTeam: 3,
        halfTime: { goalsHomeTeam: 0, goalsAwayTeam: 2 }
      },
      odds: null
    },
    {
      _links: {
        self: { href: "http://api.football-data.org/v1/fixtures/164735" },
        competition: {
          href: "http://api.football-data.org/v1/competitions/464"
        },
        homeTeam: { href: "http://api.football-data.org/v1/teams/66" },
        awayTeam: { href: "http://api.football-data.org/v1/teams/751" }
      },
      date: "2017-12-05T20:45:00Z",
      status: "FINISHED",
      matchday: 6,
      homeTeamName: "Manchester United FC",
      awayTeamName: "CSKA Moscow",
      result: {
        goalsHomeTeam: 2,
        goalsAwayTeam: 1,
        halfTime: { goalsHomeTeam: 0, goalsAwayTeam: 1 }
      },
      odds: null
    },
    {
      _links: {
        self: { href: "http://api.football-data.org/v1/fixtures/159170" },
        competition: {
          href: "http://api.football-data.org/v1/competitions/445"
        },
        homeTeam: { href: "http://api.football-data.org/v1/teams/66" },
        awayTeam: { href: "http://api.football-data.org/v1/teams/65" }
      },
      date: "2017-12-10T17:30:00Z",
      status: "FINISHED",
      matchday: 16,
      homeTeamName: "Manchester United FC",
      awayTeamName: "Manchester City FC",
      result: {
        goalsHomeTeam: 1,
        goalsAwayTeam: 2,
        halfTime: { goalsHomeTeam: 1, goalsAwayTeam: 1 }
      },
      odds: null
    },
    {
      _links: {
        self: { href: "http://api.football-data.org/v1/fixtures/159161" },
        competition: {
          href: "http://api.football-data.org/v1/competitions/445"
        },
        homeTeam: { href: "http://api.football-data.org/v1/teams/66" },
        awayTeam: { href: "http://api.football-data.org/v1/teams/1044" }
      },
      date: "2017-12-13T21:00:00Z",
      status: "FINISHED",
      matchday: 17,
      homeTeamName: "Manchester United FC",
      awayTeamName: "AFC Bournemouth",
      result: {
        goalsHomeTeam: 1,
        goalsAwayTeam: 0,
        halfTime: { goalsHomeTeam: 1, goalsAwayTeam: 0 }
      },
      odds: { homeWin: 1.23, draw: 5.75, awayWin: 12.0 }
    },
    {
      _links: {
        self: { href: "http://api.football-data.org/v1/fixtures/159155" },
        competition: {
          href: "http://api.football-data.org/v1/competitions/445"
        },
        homeTeam: { href: "http://api.football-data.org/v1/teams/74" },
        awayTeam: { href: "http://api.football-data.org/v1/teams/66" }
      },
      date: "2017-12-17T15:15:00Z",
      status: "FINISHED",
      matchday: 18,
      homeTeamName: "West Bromwich Albion FC",
      awayTeamName: "Manchester United FC",
      result: {
        goalsHomeTeam: 1,
        goalsAwayTeam: 2,
        halfTime: { goalsHomeTeam: 0, goalsAwayTeam: 2 }
      },
      odds: null
    },
    {
      _links: {
        self: { href: "http://api.football-data.org/v1/fixtures/159140" },
        competition: {
          href: "http://api.football-data.org/v1/competitions/445"
        },
        homeTeam: { href: "http://api.football-data.org/v1/teams/338" },
        awayTeam: { href: "http://api.football-data.org/v1/teams/66" }
      },
      date: "2017-12-23T20:45:00Z",
      status: "FINISHED",
      matchday: 19,
      homeTeamName: "Leicester City FC",
      awayTeamName: "Manchester United FC",
      result: {
        goalsHomeTeam: 2,
        goalsAwayTeam: 2,
        halfTime: { goalsHomeTeam: 1, goalsAwayTeam: 1 }
      },
      odds: null
    },
    {
      _links: {
        self: { href: "http://api.football-data.org/v1/fixtures/159131" },
        competition: {
          href: "http://api.football-data.org/v1/competitions/445"
        },
        homeTeam: { href: "http://api.football-data.org/v1/teams/66" },
        awayTeam: { href: "http://api.football-data.org/v1/teams/328" }
      },
      date: "2017-12-26T15:00:00Z",
      status: "FINISHED",
      matchday: 20,
      homeTeamName: "Manchester United FC",
      awayTeamName: "Burnley FC",
      result: {
        goalsHomeTeam: 2,
        goalsAwayTeam: 2,
        halfTime: { goalsHomeTeam: 0, goalsAwayTeam: 2 }
      },
      odds: { homeWin: 1.16, draw: 6.75, awayWin: 16.0 }
    },
    {
      _links: {
        self: { href: "http://api.football-data.org/v1/fixtures/159121" },
        competition: {
          href: "http://api.football-data.org/v1/competitions/445"
        },
        homeTeam: { href: "http://api.football-data.org/v1/teams/66" },
        awayTeam: { href: "http://api.football-data.org/v1/teams/340" }
      },
      date: "2017-12-30T17:30:00Z",
      status: "FINISHED",
      matchday: 21,
      homeTeamName: "Manchester United FC",
      awayTeamName: "Southampton FC",
      result: {
        goalsHomeTeam: 0,
        goalsAwayTeam: 0,
        halfTime: { goalsHomeTeam: 0, goalsAwayTeam: 0 }
      },
      odds: { homeWin: 1.38, draw: 4.5, awayWin: 8.25 }
    },
    {
      _links: {
        self: { href: "http://api.football-data.org/v1/fixtures/159109" },
        competition: {
          href: "http://api.football-data.org/v1/competitions/445"
        },
        homeTeam: { href: "http://api.football-data.org/v1/teams/62" },
        awayTeam: { href: "http://api.football-data.org/v1/teams/66" }
      },
      date: "2018-01-01T17:30:00Z",
      status: "FINISHED",
      matchday: 22,
      homeTeamName: "Everton FC",
      awayTeamName: "Manchester United FC",
      result: {
        goalsHomeTeam: 0,
        goalsAwayTeam: 2,
        halfTime: { goalsHomeTeam: 0, goalsAwayTeam: 0 }
      },
      odds: { homeWin: 6.25, draw: 3.9, awayWin: 1.52 }
    },
    {
      _links: {
        self: { href: "http://api.football-data.org/v1/fixtures/159101" },
        competition: {
          href: "http://api.football-data.org/v1/competitions/445"
        },
        homeTeam: { href: "http://api.football-data.org/v1/teams/66" },
        awayTeam: { href: "http://api.football-data.org/v1/teams/70" }
      },
      date: "2018-01-15T20:00:00Z",
      status: "FINISHED",
      matchday: 23,
      homeTeamName: "Manchester United FC",
      awayTeamName: "Stoke City FC",
      result: {
        goalsHomeTeam: 3,
        goalsAwayTeam: 0,
        halfTime: { goalsHomeTeam: 2, goalsAwayTeam: 0 }
      },
      odds: null
    },
    {
      _links: {
        self: { href: "http://api.football-data.org/v1/fixtures/159088" },
        competition: {
          href: "http://api.football-data.org/v1/competitions/445"
        },
        homeTeam: { href: "http://api.football-data.org/v1/teams/328" },
        awayTeam: { href: "http://api.football-data.org/v1/teams/66" }
      },
      date: "2018-01-20T15:00:00Z",
      status: "FINISHED",
      matchday: 24,
      homeTeamName: "Burnley FC",
      awayTeamName: "Manchester United FC",
      result: {
        goalsHomeTeam: 0,
        goalsAwayTeam: 1,
        halfTime: { goalsHomeTeam: 0, goalsAwayTeam: 0 }
      },
      odds: null
    },
    {
      _links: {
        self: { href: "http://api.football-data.org/v1/fixtures/159078" },
        competition: {
          href: "http://api.football-data.org/v1/competitions/445"
        },
        homeTeam: { href: "http://api.football-data.org/v1/teams/73" },
        awayTeam: { href: "http://api.football-data.org/v1/teams/66" }
      },
      date: "2018-01-31T20:00:00Z",
      status: "FINISHED",
      matchday: 25,
      homeTeamName: "Tottenham Hotspur FC",
      awayTeamName: "Manchester United FC",
      result: {
        goalsHomeTeam: 2,
        goalsAwayTeam: 0,
        halfTime: { goalsHomeTeam: 2, goalsAwayTeam: 0 }
      },
      odds: null
    },
    {
      _links: {
        self: { href: "http://api.football-data.org/v1/fixtures/159073" },
        competition: {
          href: "http://api.football-data.org/v1/competitions/445"
        },
        homeTeam: { href: "http://api.football-data.org/v1/teams/66" },
        awayTeam: { href: "http://api.football-data.org/v1/teams/394" }
      },
      date: "2018-02-03T15:00:00Z",
      status: "FINISHED",
      matchday: 26,
      homeTeamName: "Manchester United FC",
      awayTeamName: "Huddersfield Town",
      result: {
        goalsHomeTeam: 2,
        goalsAwayTeam: 0,
        halfTime: { goalsHomeTeam: 0, goalsAwayTeam: 0 }
      },
      odds: null
    },
    {
      _links: {
        self: { href: "http://api.football-data.org/v1/fixtures/159060" },
        competition: {
          href: "http://api.football-data.org/v1/competitions/445"
        },
        homeTeam: { href: "http://api.football-data.org/v1/teams/67" },
        awayTeam: { href: "http://api.football-data.org/v1/teams/66" }
      },
      date: "2018-02-11T14:15:00Z",
      status: "FINISHED",
      matchday: 27,
      homeTeamName: "Newcastle United FC",
      awayTeamName: "Manchester United FC",
      result: {
        goalsHomeTeam: 1,
        goalsAwayTeam: 0,
        halfTime: { goalsHomeTeam: 0, goalsAwayTeam: 0 }
      },
      odds: null
    },
    {
      _links: {
        self: { href: "http://api.football-data.org/v1/fixtures/165141" },
        competition: {
          href: "http://api.football-data.org/v1/competitions/464"
        },
        homeTeam: { href: "http://api.football-data.org/v1/teams/559" },
        awayTeam: { href: "http://api.football-data.org/v1/teams/66" }
      },
      date: "2018-02-21T19:45:00Z",
      status: "FINISHED",
      matchday: 7,
      homeTeamName: "Sevilla FC",
      awayTeamName: "Manchester United FC",
      result: {
        goalsHomeTeam: 0,
        goalsAwayTeam: 0,
        halfTime: { goalsHomeTeam: 0, goalsAwayTeam: 0 }
      },
      odds: null
    },
    {
      _links: {
        self: { href: "http://api.football-data.org/v1/fixtures/159053" },
        competition: {
          href: "http://api.football-data.org/v1/competitions/445"
        },
        homeTeam: { href: "http://api.football-data.org/v1/teams/66" },
        awayTeam: { href: "http://api.football-data.org/v1/teams/61" }
      },
      date: "2018-02-25T14:05:00Z",
      status: "TIMED",
      matchday: 28,
      homeTeamName: "Manchester United FC",
      awayTeamName: "Chelsea FC",
      result: { goalsHomeTeam: null, goalsAwayTeam: null },
      odds: null
    },
    {
      _links: {
        self: { href: "http://api.football-data.org/v1/fixtures/159038" },
        competition: {
          href: "http://api.football-data.org/v1/competitions/445"
        },
        homeTeam: { href: "http://api.football-data.org/v1/teams/354" },
        awayTeam: { href: "http://api.football-data.org/v1/teams/66" }
      },
      date: "2018-03-05T20:00:00Z",
      status: "TIMED",
      matchday: 29,
      homeTeamName: "Crystal Palace FC",
      awayTeamName: "Manchester United FC",
      result: { goalsHomeTeam: null, goalsAwayTeam: null },
      odds: null
    },
    {
      _links: {
        self: { href: "http://api.football-data.org/v1/fixtures/159031" },
        competition: {
          href: "http://api.football-data.org/v1/competitions/445"
        },
        homeTeam: { href: "http://api.football-data.org/v1/teams/66" },
        awayTeam: { href: "http://api.football-data.org/v1/teams/64" }
      },
      date: "2018-03-10T12:30:00Z",
      status: "SCHEDULED",
      matchday: 30,
      homeTeamName: "Manchester United FC",
      awayTeamName: "Liverpool FC",
      result: { goalsHomeTeam: null, goalsAwayTeam: null },
      odds: null
    },
    {
      _links: {
        self: { href: "http://api.football-data.org/v1/fixtures/165135" },
        competition: {
          href: "http://api.football-data.org/v1/competitions/464"
        },
        homeTeam: { href: "http://api.football-data.org/v1/teams/66" },
        awayTeam: { href: "http://api.football-data.org/v1/teams/559" }
      },
      date: "2018-03-13T19:45:00Z",
      status: "TIMED",
      matchday: 7,
      homeTeamName: "Manchester United FC",
      awayTeamName: "Sevilla FC",
      result: { goalsHomeTeam: null, goalsAwayTeam: null },
      odds: null
    },
    {
      _links: {
        self: { href: "http://api.football-data.org/v1/fixtures/159025" },
        competition: {
          href: "http://api.football-data.org/v1/competitions/445"
        },
        homeTeam: { href: "http://api.football-data.org/v1/teams/563" },
        awayTeam: { href: "http://api.football-data.org/v1/teams/66" }
      },
      date: "2018-03-18T13:30:00Z",
      status: "SCHEDULED",
      matchday: 31,
      homeTeamName: "West Ham United FC",
      awayTeamName: "Manchester United FC",
      result: { goalsHomeTeam: null, goalsAwayTeam: null },
      odds: null
    },
    {
      _links: {
        self: { href: "http://api.football-data.org/v1/fixtures/159011" },
        competition: {
          href: "http://api.football-data.org/v1/competitions/445"
        },
        homeTeam: { href: "http://api.football-data.org/v1/teams/66" },
        awayTeam: { href: "http://api.football-data.org/v1/teams/72" }
      },
      date: "2018-03-31T14:00:00Z",
      status: "SCHEDULED",
      matchday: 32,
      homeTeamName: "Manchester United FC",
      awayTeamName: "Swansea City FC",
      result: { goalsHomeTeam: null, goalsAwayTeam: null },
      odds: null
    },
    {
      _links: {
        self: { href: "http://api.football-data.org/v1/fixtures/159002" },
        competition: {
          href: "http://api.football-data.org/v1/competitions/445"
        },
        homeTeam: { href: "http://api.football-data.org/v1/teams/65" },
        awayTeam: { href: "http://api.football-data.org/v1/teams/66" }
      },
      date: "2018-04-07T14:00:00Z",
      status: "SCHEDULED",
      matchday: 33,
      homeTeamName: "Manchester City FC",
      awayTeamName: "Manchester United FC",
      result: { goalsHomeTeam: null, goalsAwayTeam: null },
      odds: null
    },
    {
      _links: {
        self: { href: "http://api.football-data.org/v1/fixtures/158990" },
        competition: {
          href: "http://api.football-data.org/v1/competitions/445"
        },
        homeTeam: { href: "http://api.football-data.org/v1/teams/66" },
        awayTeam: { href: "http://api.football-data.org/v1/teams/74" }
      },
      date: "2018-04-14T14:00:00Z",
      status: "SCHEDULED",
      matchday: 34,
      homeTeamName: "Manchester United FC",
      awayTeamName: "West Bromwich Albion FC",
      result: { goalsHomeTeam: null, goalsAwayTeam: null },
      odds: null
    },
    {
      _links: {
        self: { href: "http://api.football-data.org/v1/fixtures/158976" },
        competition: {
          href: "http://api.football-data.org/v1/competitions/445"
        },
        homeTeam: { href: "http://api.football-data.org/v1/teams/1044" },
        awayTeam: { href: "http://api.football-data.org/v1/teams/66" }
      },
      date: "2018-04-21T14:00:00Z",
      status: "SCHEDULED",
      matchday: 35,
      homeTeamName: "AFC Bournemouth",
      awayTeamName: "Manchester United FC",
      result: { goalsHomeTeam: null, goalsAwayTeam: null },
      odds: null
    },
    {
      _links: {
        self: { href: "http://api.football-data.org/v1/fixtures/158970" },
        competition: {
          href: "http://api.football-data.org/v1/competitions/445"
        },
        homeTeam: { href: "http://api.football-data.org/v1/teams/66" },
        awayTeam: { href: "http://api.football-data.org/v1/teams/57" }
      },
      date: "2018-04-28T14:00:00Z",
      status: "SCHEDULED",
      matchday: 36,
      homeTeamName: "Manchester United FC",
      awayTeamName: "Arsenal FC",
      result: { goalsHomeTeam: null, goalsAwayTeam: null },
      odds: null
    },
    {
      _links: {
        self: { href: "http://api.football-data.org/v1/fixtures/158958" },
        competition: {
          href: "http://api.football-data.org/v1/competitions/445"
        },
        homeTeam: { href: "http://api.football-data.org/v1/teams/397" },
        awayTeam: { href: "http://api.football-data.org/v1/teams/66" }
      },
      date: "2018-05-05T14:00:00Z",
      status: "SCHEDULED",
      matchday: 37,
      homeTeamName: "Brighton & Hove Albion",
      awayTeamName: "Manchester United FC",
      result: { goalsHomeTeam: null, goalsAwayTeam: null },
      odds: null
    },
    {
      _links: {
        self: { href: "http://api.football-data.org/v1/fixtures/158950" },
        competition: {
          href: "http://api.football-data.org/v1/competitions/445"
        },
        homeTeam: { href: "http://api.football-data.org/v1/teams/66" },
        awayTeam: { href: "http://api.football-data.org/v1/teams/346" }
      },
      date: "2018-05-13T14:00:00Z",
      status: "SCHEDULED",
      matchday: 38,
      homeTeamName: "Manchester United FC",
      awayTeamName: "Watford FC",
      result: { goalsHomeTeam: null, goalsAwayTeam: null },
      odds: null
    }
  ]
};

const teamData = {
  _links: {
    self: { href: "http://api.football-data.org/v1/teams/66" },
    fixtures: { href: "http://api.football-data.org/v1/teams/66/fixtures" },
    players: { href: "http://api.football-data.org/v1/teams/66/players" }
  },
  name: "Manchester United FC",
  shortName: "ManU",
  squadMarketValue: "377,250,000 €",
  crestUrl:
    "http://upload.wikimedia.org/wikipedia/de/d/da/Manchester_United_FC.svg"
};

const playerData = {
  _links: {
    self: { href: "http://api.football-data.org/v1/teams/66/players" },
    team: { href: "http://api.football-data.org/v1/teams/66" }
  },
  count: 27,
  players: [
    {
      name: "Romelu Lukaku",
      position: "Centre-Forward",
      jerseyNumber: 9,
      dateOfBirth: "1993-05-13",
      nationality: "Belgium",
      contractUntil: "2022-06-30",
      marketValue: null
    },
    {
      name: "David de Gea",
      position: "Keeper",
      jerseyNumber: 1,
      dateOfBirth: "1990-11-07",
      nationality: "Spain",
      contractUntil: "2019-06-30",
      marketValue: null
    },
    {
      name: "Sergio Romero",
      position: "Keeper",
      jerseyNumber: 20,
      dateOfBirth: "1987-02-22",
      nationality: "Argentina",
      contractUntil: "2021-06-30",
      marketValue: null
    },
    {
      name: "Eric Bailly",
      position: "Centre-Back",
      jerseyNumber: 3,
      dateOfBirth: "1994-04-12",
      nationality: "Cote d'Ivoire",
      contractUntil: "2020-06-30",
      marketValue: null
    },
    {
      name: "Chris Smalling",
      position: "Centre-Back",
      jerseyNumber: 12,
      dateOfBirth: "1989-11-22",
      nationality: "England",
      contractUntil: "2019-06-30",
      marketValue: null
    },
    {
      name: "Marcos Rojo",
      position: "Centre-Back",
      jerseyNumber: 5,
      dateOfBirth: "1990-03-20",
      nationality: "Argentina",
      contractUntil: "2019-06-30",
      marketValue: null
    },
    {
      name: "Phil Jones",
      position: "Centre-Back",
      jerseyNumber: 4,
      dateOfBirth: "1992-02-21",
      nationality: "England",
      contractUntil: "2019-06-30",
      marketValue: null
    },
    {
      name: "Daley Blind",
      position: "Left-Back",
      jerseyNumber: 17,
      dateOfBirth: "1990-03-09",
      nationality: "Netherlands",
      contractUntil: "2019-06-30",
      marketValue: null
    },
    {
      name: "Luke Shaw",
      position: "Left-Back",
      jerseyNumber: 23,
      dateOfBirth: "1995-07-12",
      nationality: "England",
      contractUntil: "2018-06-30",
      marketValue: null
    },
    {
      name: "Matteo Darmian",
      position: "Right-Back",
      jerseyNumber: 36,
      dateOfBirth: "1989-12-02",
      nationality: "Italy",
      contractUntil: "2019-06-30",
      marketValue: null
    },
    {
      name: "Antonio Valencia",
      position: "Right-Back",
      jerseyNumber: 25,
      dateOfBirth: "1985-08-04",
      nationality: "Ecuador",
      contractUntil: "2019-06-30",
      marketValue: null
    },
    {
      name: "Michael Carrick",
      position: "Defensive Midfield",
      jerseyNumber: 16,
      dateOfBirth: "1981-07-28",
      nationality: "England",
      contractUntil: "2018-06-30",
      marketValue: null
    },
    {
      name: "Paul Pogba",
      position: "Central Midfield",
      jerseyNumber: 6,
      dateOfBirth: "1993-03-15",
      nationality: "France",
      contractUntil: "2021-06-30",
      marketValue: null
    },
    {
      name: "Ander Herrera",
      position: "Central Midfield",
      jerseyNumber: 21,
      dateOfBirth: "1989-08-14",
      nationality: "Spain",
      contractUntil: "2019-06-30",
      marketValue: null
    },
    {
      name: "Marouane Fellaini",
      position: "Central Midfield",
      jerseyNumber: 27,
      dateOfBirth: "1987-11-22",
      nationality: "Belgium",
      contractUntil: "2018-06-30",
      marketValue: null
    },
    {
      name: "Ashley Young",
      position: "Left Midfield",
      jerseyNumber: 18,
      dateOfBirth: "1985-07-09",
      nationality: "England",
      contractUntil: "2018-06-30",
      marketValue: null
    },
    {
      name: "Juan Mata",
      position: "Attacking Midfield",
      jerseyNumber: 8,
      dateOfBirth: "1988-04-28",
      nationality: "Spain",
      contractUntil: "2019-06-30",
      marketValue: null
    },
    {
      name: "Jesse Lingard",
      position: "Left Wing",
      jerseyNumber: 14,
      dateOfBirth: "1992-12-15",
      nationality: "England",
      contractUntil: "2021-06-30",
      marketValue: null
    },
    {
      name: "Anthony Martial",
      position: "Left Wing",
      jerseyNumber: 11,
      dateOfBirth: "1995-12-05",
      nationality: "France",
      contractUntil: "2019-06-30",
      marketValue: null
    },
    {
      name: "Zlatan Ibrahimovic",
      position: "Centre-Forward",
      jerseyNumber: 10,
      dateOfBirth: "1981-10-03",
      nationality: "Sweden",
      contractUntil: "2018-06-30",
      marketValue: null
    },
    {
      name: "Marcus Rashford",
      position: "Centre-Forward",
      jerseyNumber: 19,
      dateOfBirth: "1997-10-31",
      nationality: "England",
      contractUntil: "2020-06-30",
      marketValue: null
    },
    {
      name: "Alexis Sánchez",
      position: "Left Wing",
      jerseyNumber: 7,
      dateOfBirth: "1988-12-19",
      nationality: "Chile",
      contractUntil: "2022-06-30",
      marketValue: null
    },
    {
      name: "Nemanja Matic",
      position: "Defensive Midfield",
      jerseyNumber: 31,
      dateOfBirth: "1988-08-01",
      nationality: "Serbia",
      contractUntil: "2020-06-30",
      marketValue: null
    },
    {
      name: "Victor Lindelöf",
      position: "Centre-Back",
      jerseyNumber: 2,
      dateOfBirth: "1994-07-17",
      nationality: "Sweden",
      contractUntil: "2021-06-30",
      marketValue: null
    },
    {
      name: "Joel Pereira",
      position: "Keeper",
      jerseyNumber: 40,
      dateOfBirth: "1996-06-28",
      nationality: "Portugal",
      contractUntil: "2021-06-30",
      marketValue: null
    },
    {
      name: "Cameron Borthwick-Jackson",
      position: "Left-Back",
      jerseyNumber: 43,
      dateOfBirth: "1997-02-02",
      nationality: "England",
      contractUntil: "2020-06-30",
      marketValue: null
    },
    {
      name: "Scott McTominay",
      position: "Attacking Midfield",
      jerseyNumber: 39,
      dateOfBirth: "1996-12-08",
      nationality: "Scotland",
      contractUntil: "2021-06-30",
      marketValue: null
    }
  ]
};
