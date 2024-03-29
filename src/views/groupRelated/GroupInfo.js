import React, { Component } from "react";

//********************************************************** */
//               CORE UI
//********************************************************** */

import { CRow } from "@coreui/react";

//********************************************************** */
//               MATERIAL UI
//********************************************************** */

// import Button from "@material-ui/core/Button";
// import Dialog from "@material-ui/core/Dialog";
// import DialogActions from "@material-ui/core/DialogActions";
// import DialogContent from "@material-ui/core/DialogContent";
// import DialogContentText from "@material-ui/core/DialogContentText";
// import DialogTitle from "@material-ui/core/DialogTitle";
// import DeleteIcon from "@material-ui/icons/Delete";

//********************************************************** */

import Item from "../ItemRelated/Item";

export default class GroupInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <CRow>
          <Item />
        </CRow>
      </div>
    );
  }
}
