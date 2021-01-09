import React, { Component } from "react";

import "./ItemsRelated.css";
import {
  CRow,
  CCard,
  CCardBody,
  CListGroup,
  CListGroupItem,
  CCardFooter,
  CCol,
} from "@coreui/react";

//********************************************************** */
//               MATERIAL UI
//********************************************************** */
import { styled } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Button from "@material-ui/core/Button";

//********************************************************** */

const StyledTypography = styled(Typography)({
  fontSize: 15,
  fontWeight: "fontWeightRegular",
});

// const classes = styles();

export default class Item extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <CRow className="wrapper">
          <CCol lg="12" className="list">
            <div className="wrapper">
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <StyledTypography>Item 1</StyledTypography>
                </AccordionSummary>
                <AccordionDetails>
                  {/* <Typography>Item Info</Typography> */}
                  <CCard>
                    {/* <CCardHeader>List group</CCardHeader> */}
                    <CCardBody>
                      <CListGroup>
                        <CListGroupItem>
                          Cras justo
                          odioxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                        </CListGroupItem>
                        <CListGroupItem>Dapibus ac facilisis in</CListGroupItem>
                        <CListGroupItem>Morbi leo risus</CListGroupItem>
                        <CListGroupItem>Porta ac consectetur ac</CListGroupItem>
                        <CListGroupItem>Vestibulum at eros</CListGroupItem>
                      </CListGroup>
                    </CCardBody>
                    <CCardFooter className="text-center">
                      <Button>Update</Button>
                      <Button color="secondary">Delete</Button>
                    </CCardFooter>
                  </CCard>
                </AccordionDetails>
              </Accordion>
            </div>
          </CCol>
          <CCol lg="12" className="list">
            <div className="wrapper">
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <StyledTypography>Item 1</StyledTypography>
                </AccordionSummary>
                <AccordionDetails>
                  {/* <Typography>Item Info</Typography> */}
                  <CCard>
                    {/* <CCardHeader>List group</CCardHeader> */}
                    <CCardBody>
                      <CListGroup>
                        <CListGroupItem>
                          Cras justo
                          odioxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                        </CListGroupItem>
                        <CListGroupItem>Dapibus ac facilisis in</CListGroupItem>
                        <CListGroupItem>Morbi leo risus</CListGroupItem>
                        <CListGroupItem>Porta ac consectetur ac</CListGroupItem>
                        <CListGroupItem>Vestibulum at eros</CListGroupItem>
                      </CListGroup>
                    </CCardBody>
                    <CCardFooter className="text-center">
                      <Button>Update</Button>
                      <Button color="secondary">Delete</Button>
                    </CCardFooter>
                  </CCard>
                </AccordionDetails>
              </Accordion>
            </div>
          </CCol>
          <CCol lg="12" className="list">
            <div className="wrapper">
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <StyledTypography>Item 1</StyledTypography>
                </AccordionSummary>
                <AccordionDetails>
                  {/* <Typography>Item Info</Typography> */}
                  <CCard>
                    {/* <CCardHeader>List group</CCardHeader> */}
                    <CCardBody>
                      <CListGroup>
                        <CListGroupItem>
                          Cras justo
                          odioxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                        </CListGroupItem>
                        <CListGroupItem>Dapibus ac facilisis in</CListGroupItem>
                        <CListGroupItem>Morbi leo risus</CListGroupItem>
                        <CListGroupItem>Porta ac consectetur ac</CListGroupItem>
                        <CListGroupItem>Vestibulum at eros</CListGroupItem>
                      </CListGroup>
                    </CCardBody>
                    <CCardFooter className="text-center">
                      <Button>Update</Button>
                      <Button color="secondary">Delete</Button>
                    </CCardFooter>
                  </CCard>
                </AccordionDetails>
              </Accordion>
            </div>
          </CCol>
          <CCol lg="12" className="list">
            <div className="wrapper">
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <StyledTypography>Item 1</StyledTypography>
                </AccordionSummary>
                <AccordionDetails>
                  {/* <Typography>Item Info</Typography> */}
                  <CCard>
                    {/* <CCardHeader>List group</CCardHeader> */}
                    <CCardBody>
                      <CListGroup>
                        <CListGroupItem>
                          Cras justo
                          odioxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                        </CListGroupItem>
                        <CListGroupItem>Dapibus ac facilisis in</CListGroupItem>
                        <CListGroupItem>Morbi leo risus</CListGroupItem>
                        <CListGroupItem>Porta ac consectetur ac</CListGroupItem>
                        <CListGroupItem>Vestibulum at eros</CListGroupItem>
                      </CListGroup>
                    </CCardBody>
                    <CCardFooter className="text-center">
                      <Button>Update</Button>
                      <Button color="secondary">Delete</Button>
                    </CCardFooter>
                  </CCard>
                </AccordionDetails>
              </Accordion>
            </div>
          </CCol>
        </CRow>
      </>
    );
  }
}
