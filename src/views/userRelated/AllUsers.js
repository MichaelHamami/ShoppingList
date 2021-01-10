import { CCol, CRow, CLink } from "@coreui/react";
import React, { Component } from "react";
import "./user.css";
import User from "./User";
import UserForm from "./UserForm";
import UserService from "./UserService";
import SpecificUser from "./SpecificUser";

//********************************************************** */
//               MATERIAL UI
//********************************************************** */

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import Input from "@material-ui/core/Input";
import { DialogContent } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import DialogTitle from "@material-ui/core/DialogTitle";
import Select from "@material-ui/core/Select";
// import MenuProps from "@material-ui/core/MenuProps";
import MenuItem from "@material-ui/core/MenuItem";

//********************************************************** */

export default class AllUsers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      users: [],
    };
    this.openChange = this.openChange.bind(this);
    this.setUsers = this.setUsers.bind(this);
  }

  componentDidMount() {
    UserService.getAllUsers().then((response) => {
      this.setState({ users: response.data });
      console.log("mounted");
    });
  }

  setUsers() {
    UserService.getAllUsers().then((response) => {
      this.setState({ users: response.data });
      console.log("updated");
    });
  }

  openChange(event) {
    event.preventDefault();
    this.setState({
      open: !this.state.open,
    });
    console.log(this.state.open);
    UserService.getAllUsers().then((response) => {
      console.log(response.data);
      console.log(this.state.users[0]);
    });
  }
  render() {
    return (
      <div>
        <CRow>
          <CCol>
            {this.state.users[0] ? (
              this.state.users.map((user) => (
                <User
                  email={user.userId.email}
                  avatar={user.avatar}
                  role={user.role}
                  username={user.username}
                />
              ))
            ) : (
              <h3>loading...</h3>
            )}
          </CCol>
          <CCol>
            <div className="card-header-actions">
              <CLink className="card-header-action">
                <Button onClick={this.openChange} color="primary" autoFocus>
                  Add User
                </Button>
              </CLink>
              <Dialog
                className="form"
                open={this.state.open}
                onClose={this.openChange}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="form-dialog-title">
                  Create new user
                </DialogTitle>
                <DialogContent>
                  <UserForm
                    newUser={UserService.newUser}
                    openChange={this.openChange}
                    setUsers={this.setUsers}
                  />
                </DialogContent>
              </Dialog>
            </div>
          </CCol>
          <CCol>
            <SpecificUser
              getSpecificUser={UserService.getSingleUser}
              name={"droruru"}
            />
          </CCol>
        </CRow>
      </div>
    );
  }
}
