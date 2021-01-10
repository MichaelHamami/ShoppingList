import React, { Component } from "react";

import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  FormControl,
  InputLabel,
  Input,
  DialogActions,
} from "@material-ui/core";

export default class AddGroupView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      groupName: "",
    };

    this.openChange = this.openChange.bind(this);
    this.addNewGroup = this.addNewGroup.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  openChange() {
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

  addNewGroup(event) {
    event.preventDefault();
    this.props.addGroup(this.state.groupName);
    this.openChange();
  }

  render() {
    return (
      <div>
        <Button variant="contained" color="primary" onClick={this.openChange}>
          Create New List
        </Button>
        <Dialog
          className="form"
          open={this.state.open}
          onClose={this.openChange}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="form-dialog-title">
            Create new Shopping List
          </DialogTitle>
          <div>
            <form action="/" method="POST" onSubmit={this.addNewGroup}>
              <DialogContent>
                <div>
                  <FormControl>
                    <InputLabel htmlFor="my-input">Name</InputLabel>
                    <Input
                      id="my-input"
                      onChange={this.handleChange}
                      value={this.state.groupName}
                      name="groupName"
                      aria-describedby="my-helper-text"
                      type="text"
                      required
                    />
                  </FormControl>
                </div>
              </DialogContent>
              <DialogActions>
                <Button name="open" onClick={this.openChange} color="primary">
                  Cancel
                </Button>
                <Button type="submit" label="Submit" color="primary">
                  Confirm
                </Button>
              </DialogActions>
            </form>
          </div>
        </Dialog>
      </div>
    );
  }
}
