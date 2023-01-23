import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import "../App.css";
import Collapse from "react-bootstrap/Collapse";

function Sidebar() {
  // UseState For Sidebar Collapse List
  const [show, setShow] = useState(false);
  const [comp, setComp] = useState(false);
  const [form, setForm] = useState(false);
  const [table, setTable] = useState(false);
  const [chart, setChart] = useState(false);
  const [icon, setIcon] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <i
        onClick={handleShow}
        style={{
          fontSize: "27px",
          color: "blue",
          marginRight: "1em",
          cursor: "pointer",
        }}
        class="fas fa-bars"
      ></i>

      <Offcanvas
        style={{ marginTop: "5em", width: "21em", color: "#00296f" }}
        show={show}
        onHide={handleClose}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <div style={{ fontSize: "22px" }}>
              <i class="material-icons">dashboard</i> Dashboard
            </div>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div onClick={() => setComp(!comp)} style={{ fontSize: "22px" }}>
            <i
              class="fas fa-layer-group"
              aria-controls="example-collapse-text"
              aria-expanded={comp}
            ></i>{" "}
            Components
            <i style={{ float: "right" }} class="fas fa-angle-down"></i>
            <Collapse in={comp}>
              <div style={{ fontSize: "19px" }} id="example-collapse-text">
                <ul style={{ listStyleType: "circle" }}>
                  <li>Alert</li>
                  <li>Accordion</li>
                  <li>Badges</li>
                  <li>Breadcrumbs</li>
                  <li>Buttons</li>
                  <li>Cards</li>
                  <li>Carousel</li>
                  <li>List group</li>
                  <li>Model</li>
                  <li>Tabs</li>
                  <li>Pagination</li>
                  <li>Spinners</li>
                  <li>Tooltips</li>
                </ul>
              </div>
            </Collapse>
          </div>
          <br></br>
          <div onClick={() => setForm(!form)} style={{ fontSize: "22px" }}>
            <i
              class="fas fa-book"
              aria-controls="example-collapse-text"
              aria-expanded={form}
            ></i>{" "}
            Forms
            <i style={{ float: "right" }} class="fas fa-angle-down"></i>
            <Collapse in={form}>
              <div style={{ fontSize: "19px" }} id="example-collapse-text">
                <ul style={{ listStyleType: "circle" }}>
                  <li>Form Elements</li>
                  <li>Form Layouts</li>
                  <li>Form Editors</li>
                  <li>Form Validation</li>
                </ul>
              </div>
            </Collapse>
          </div>
          <br></br>
          <div onClick={() => setTable(!table)} style={{ fontSize: "22px" }}>
            <i
              class="fas fa-table"
              aria-controls="example-collapse-text"
              aria-expanded={table}
            ></i>{" "}
            Tables
            <i style={{ float: "right" }} class="fas fa-angle-down"></i>
            <Collapse in={table}>
              <div style={{ fontSize: "19px" }} id="example-collapse-text">
                <ul style={{ listStyleType: "circle" }}>
                  <li>General Tables</li>
                  <li>Data Tables</li>
                </ul>
              </div>
            </Collapse>
          </div>
          <br></br>
          <div onClick={() => setChart(!chart)} style={{ fontSize: "22px" }}>
            <i
              class="fas fa-chart-bar"
              aria-controls="example-collapse-text"
              aria-expanded={chart}
            ></i>{" "}
            Charts
            <i style={{ float: "right" }} class="fas fa-angle-down"></i>
            <Collapse in={chart}>
              <div style={{ fontSize: "19px" }} id="example-collapse-text">
                <ul style={{ listStyleType: "circle" }}>
                  <li>Chart.js</li>
                  <li>ApexCharts</li>
                  <li>ECharts</li>
                </ul>
              </div>
            </Collapse>
          </div>
          <br></br>
          <div onClick={() => setIcon(!icon)} style={{ fontSize: "22px" }}>
            <i
              class="fa fa-diamond"
              aria-controls="example-collapse-text"
              aria-expanded={icon}
            ></i>{" "}
            Icons
            <i style={{ float: "right" }} class="fas fa-angle-down"></i>
            <Collapse in={icon}>
              <div style={{ fontSize: "19px" }} id="example-collapse-text">
                <ul style={{ listStyleType: "circle" }}>
                  <li>Bootstrap Icons</li>
                  <li>Remix Icons</li>
                  <li>Boxicons</li>
                </ul>
              </div>
            </Collapse>
          </div>
          <br></br>
          <div style={{ color: "gray", fontSize: "19px" }}>PAGES</div>
          <br></br>
          <div style={{ fontSize: "22px" }}>
            <i class="fas fa-user-alt"></i> Profile
          </div>
          <br></br>
          <div style={{ fontSize: "22px" }}>
            <i class="far fa-question-circle"></i> F.A.Q
          </div>
          <br></br>
          <div style={{ fontSize: "22px" }}>
            <i class="material-icons">perm_contact_calendar</i> Contact
          </div>
          <br></br>
          <div style={{ fontSize: "22px" }}>
            <i class="fas fa-pager"></i> Register
          </div>
          <br></br>
          <div style={{ fontSize: "22px" }}>
            <i class="fas fa-sign-out-alt"></i> Login
          </div>
          <br></br>
          <div style={{ fontSize: "22px" }}>
            <i class="fas fa-minus-circle"></i> Error 404
          </div>
          <br></br>
          <div style={{ fontSize: "22px" }}>
            <i class="far fa-file"></i> Blank
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
export default Sidebar;
