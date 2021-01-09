import React, { Component } from "react";
import { CCol, CRow } from "@coreui/react";
// import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";

// import GroupList from "../groupRelated/GroupList.js";
import ListOfGroups from "../groupRelated/ListOfGroups";
import GroupInfo from "../groupRelated/GroupInfo.js";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <CRow>
          <CCol xs="12" sm="6" md="4">
            <ListOfGroups />
            <GroupInfo />
          </CCol>
        </CRow>
      </>
    );
  }
}
