import React from "react";
import Divider from "material-ui/Divider";
import { List, ListItem } from "material-ui/List";
import { Card, CardActions, CardHeader, CardText } from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";
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

const Fixtures = props => (
  <div>
    {props.fixturesData.fixtures
      .filter(item => item.status === "SCHEDULED")
      .map((item, index) => (
        <List key={index}>
          <Card>
            <CardHeader
              title={item.homeTeamName + " vs " + item.awayTeamName}
              subtitle={item.date}
              actAsExpander={true}
              showExpandableButton={true}
            />
            <CardText expandable={true}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec
              vulputate interdum sollicitudin. Nunc lacinia auctor quam sed
              pellentesque. Aliquam dui mauris, mattis quis lacus id,
              pellentesque lobortis odio.
            </CardText>
          </Card>
        </List>
      ))}
  </div>
);

export default Fixtures;
