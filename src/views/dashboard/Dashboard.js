import React, { Component } from "react";
import { CCol, CRow } from "@coreui/react";
// import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";

// import GroupList from "../groupRelated/GroupList.js";
import GroupMain from "../groupRelated/GroupMain";
import GroupInfo from "../groupRelated/GroupInfo.js";
import GroupCard from "../groupRelated/GroupCard";
import User from "../userRelated/User";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <GroupMain />
        <GroupInfo />
        <User
          email={"email"}
          avatar={"avatar"}
          role={"role"}
          username={"username"}
        />
      </>
    );
  }
}
