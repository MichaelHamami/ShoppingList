import React, { Component } from "react";

//********************************************************** */
//               CORE UI
//********************************************************** */

import { CCard, CCardHeader, CLink } from "@coreui/react";

//********************************************************** */
//               MATERIAL UI
//********************************************************** */

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import DeleteIcon from "@material-ui/icons/Delete";

//********************************************************** */

export default class GroupCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      delete: false,
      open: false,
    };

    this.deleteAlert = this.deleteAlert.bind(this);
    this.openChange = this.openChange.bind(this);
    this.deleteGroup = this.deleteGroup.bind(this);
  }

  deleteAlert() {
    alert("are you sure?");
    console.log(alert);
  }

  openChange(event) {
    event.preventDefault();
    this.setState({
      open: !this.state.open,
    });
    console.log(this.state.open);
  }

  deleteGroup(event) {
    event.preventDefault();
    this.props.removeGroup(this.props.index);
    console.log(this.props.index);
    this.openChange(event);
  }
  render() {
    return (
      <div>
        <CCard style={{ maxWidth: "350px" }}>
          <CCardHeader>
            <a href="#">{this.props.name}</a>
            <div className="card-header-actions">
              <CLink className="card-header-action">
                <DeleteIcon
                  color="error"
                  name="deleteIcon1"
                  onClick={this.openChange}
                  fontSize="default"
                ></DeleteIcon>
              </CLink>
              <Dialog
                open={this.state.open}
                onClose={this.openChange}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">
                  {"Are you sure you want to delete the group?"}
                </DialogTitle>
                <DialogActions>
                  <Button onClick={this.openChange} color="primary">
                    Cancel
                  </Button>
                  <Button onClick={this.deleteGroup} color="primary" autoFocus>
                    Leave
                  </Button>
                </DialogActions>
              </Dialog>
            </div>
          </CCardHeader>
        </CCard>
      </div>
    );
  }
}
