import React, { Component } from "react";
import "./user.css";

//********************************************************** */
//               MATERIAL UI
//********************************************************** */

import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import Input from "@material-ui/core/Input";
import { DialogContent } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
// import MenuProps from "@material-ui/core/MenuProps";
import MenuItem from "@material-ui/core/MenuItem";

//********************************************************** */

export default class UserForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      email: "",
      avatar: "",
      role: "PLAYER",
    };

    this.handleChange = this.handleChange.bind(this);
    this.roleChange = this.roleChange.bind(this);
    this.handleNewUser = this.handleNewUser.bind(this);
  }

  roleChange(event) {
    event.preventDefault();
    this.setState({
      role: event.target.value,
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
    this.props.newUser({
      email: this.state.email,
      role: this.state.role,
      username: this.state.username,
      avatar: this.state.avatar,
    });
    this.props.openChange(event);
    this.props.setUsers();
  }

  render() {
    return (
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
            <div>
              <FormControl>
                <InputLabel htmlFor="my-input">Email address</InputLabel>
                <Input
                  id="my-input"
                  onChange={this.handleChange}
                  value={this.state.email}
                  name="email"
                  aria-describedby="my-helper-text"
                  type="email"
                />
              </FormControl>
            </div>
            <div>
              <FormControl>
                <InputLabel htmlFor="my-input">Avatar</InputLabel>
                <Input
                  id="my-input"
                  onChange={this.handleChange}
                  value={this.state.avatar}
                  name="avatar"
                  aria-describedby="my-helper-text"
                />
              </FormControl>
            </div>
            <div className="form">
              <InputLabel id="label">Role</InputLabel>
              <Select
                labelId="label"
                id="select"
                name="role"
                value={this.state.role}
                onChange={this.roleChange}
              >
                <MenuItem value="PLAYER">PLAYER</MenuItem>
                <MenuItem value="ADMIN">ADMIN</MenuItem>
              </Select>
            </div>
          </DialogContent>
          <DialogActions>
            <Button name="open" onClick={this.props.openChange} color="primary">
              Cancel
            </Button>
            <Button type="submit" label="Submit" color="primary">
              Confirm
            </Button>
          </DialogActions>
        </form>
      </div>
    );
  }
}
