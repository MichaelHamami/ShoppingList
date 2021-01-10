import { CRow } from "@coreui/react";
import React, { Component } from "react";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import "./user.css";

export default class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
    };
    this.printProps = this.printProps.bind(this);
  }

  printProps() {
    console.log(this.props.email);
  }

  render() {
    return (
      <div>
        <CRow>
          <Card className="root">
            <CardContent>
              <Typography className="title" color="textSecondary" gutterBottom>
                {this.props.email}
              </Typography>
              <Typography className="pos" color="textSecondary">
                {this.props.username}
              </Typography>
              <Typography variant="body2" component="p">
                {this.props.avatar}
                <br />
                {this.props.role}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={this.printProps}>
                Learn More
              </Button>
            </CardActions>
          </Card>
        </CRow>
      </div>
    );
  }
}

//   <h1>{props.user.id.email}</h1>
//   <h1>{props.user.id.space}</h1>
//   <h1>{props.user.role}</h1>
//   <h1>{props.user.username}</h1>
//   <h1>{props.user.avatar}</h1>
