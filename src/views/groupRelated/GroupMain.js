//*************************************************************** */
//                       CORE UI
//*************************************************************** */
import { CRow, CCol, CCard, CCardHeader, CCardBody } from "@coreui/react";
//*************************************************************** */
//                       MATERIAL UI
//*************************************************************** */
import { Button, Grid, Typography } from "@material-ui/core";
//*************************************************************** */

import React, { Component } from "react";

import GroupCard from "./GroupCard";
import AddGroupView from "./AddGroupView";

export default class GroupMain extends Component {
  constructor(props) {
    super(props);

    this.state = {
      groups: ["family", "my apartment", "BBQ Friends"],
    };

    this.handleClick = this.handleClick.bind(this);
    this.addGroup = this.addGroup.bind(this);
    this.removeGroup = this.removeGroup.bind(this);
  }
  handleClick(event) {
    event.preventDefault();
    console.log(this.state.groups);
  }
  addGroup(newGroup) {
    this.setState((prevState) => ({
      groups: [...prevState.groups, newGroup],
    }));
  }

  removeGroup(index) {
    this.setState({
      groups: this.state.groups.filter((_, i) => i !== index),
    });
  }

  render() {
    return (
      <>
        <CCard>
          <CCardHeader>
            <Grid
              justify="space-between" // Add it here :)
              container
            >
              <Grid item>
                <Typography type="title" color="inherit">
                  Shopping Lists
                </Typography>
              </Grid>

              <Grid item>
                <div>
                  <AddGroupView addGroup={this.addGroup} />
                </div>
              </Grid>
            </Grid>
          </CCardHeader>
          <CCardBody>
            <CRow>
              <CCol xs="12">
                {this.state.groups.map((groupName, key) => (
                  <GroupCard
                    key={key}
                    index={key}
                    name={groupName}
                    removeGroup={this.removeGroup}
                  />
                ))}
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>
      </>
    );
  }
}
