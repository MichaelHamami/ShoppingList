import React, { Component } from "react";
import User from "./User";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import { DialogContent } from "@material-ui/core";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import Input from "@material-ui/core/Input";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";

export default class SpecificUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      username: "",
      user: {},
    };
    this.openChange = this.openChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleNewUser = this.handleNewUser.bind(this);
  }

  openChange(event) {
    event.preventDefault();
    this.setState({
      open: !this.state.open,
    });
  }
  handleChange(event) {
    event.preventDefault();
    const {
      target: { name, value },
    } = event;
    this.setState({ [name]: value });
  }

  handleNewUser(event) {
    event.preventDefault();
    this.props.getSpecificUser(this.state.username).then((response) => {
      this.setState({ user: response.data });
      console.log("got user");
    });
  }

  render() {
    return (
      <div>
        <Button onClick={this.openChange}>Get User</Button>
        <Dialog
          className="form"
          open={this.state.open}
          onClose={this.openChange}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="form-dialog-title">Create new user</DialogTitle>
          <div>
            <form action="/" method="POST" onSubmit={this.handleNewUser}>
              <DialogContent>
                <div>
                  <FormControl>
                    <InputLabel htmlFor="my-input">Username</InputLabel>
                    <Input
                      id="my-input"
                      onChange={this.handleChange}
                      value={this.state.username}
                      name="username"
                      aria-describedby="my-helper-text"
                      type="text"
                    />
                  </FormControl>
                </div>
              </DialogContent>
              <DialogActions>
                <Button
                  name="open"
                  onClick={this.props.openChange}
                  color="primary"
                >
                  Cancel
                </Button>
                <Button type="submit" label="Submit" color="primary">
                  Confirm
                </Button>
              </DialogActions>
            </form>
          </div>
          <DialogContent>
            {this.state.user.role !== undefined ? (
              <User
                email={this.state.user.userId.email}
                avatar={this.state.user.avatar}
                role={this.state.user.role}
                username={this.state.user.username}
              />
            ) : (
              <h3>no user selected</h3>
            )}
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}
