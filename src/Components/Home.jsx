import React from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Card from "react-bootstrap/Card";
import Dropdown from "react-bootstrap/Dropdown";
import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import "../App.css";
import "./Home.css";
import MyResponsiveLine from "./LineChart";
import MyResponsiveRadar from "./Radar";
import MyResponsivePie from "./PieChart";
function Home() {
  return (
    <section style={{ paddingLeft: "1em" }} className="homeContainer">
      <h2>Dashboard</h2>
      <Breadcrumb>
        <Breadcrumb.Item active>Data</Breadcrumb.Item>
        <Breadcrumb.Item active>Dashboard</Breadcrumb.Item>
      </Breadcrumb>
      <div className="d-flex flex-wrap justify-content-around">
        <div style={{ width: "69%" }}>
          <div className="d-flex flex-wrap justify-content-around">
            <Card style={{ width: "27rem", padding: "1em", margin: "0.5em" }}>
              <Card.Body>
                <Card.Title>
                  <span style={{ color: "#012970" }}>Sales</span>{" "}
                  <span style={{ color: "#8e9fbf" }}>| Today</span>
                  <span style={{ float: "right" }}>
                    <div class="dropdown">
                      <button
                        style={{
                          background: "transparent",
                          color: "blue",
                          border: "none",
                        }}
                        class="btn btn-secondary "
                        type="button"
                        id="dropdownMenu2"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        ...
                      </button>
                      <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                        <li>
                          <button class="dropdown-item" type="button">
                            Today
                          </button>
                        </li>
                        <li>
                          <button class="dropdown-item" type="button">
                            This Month
                          </button>
                        </li>
                        <li>
                          <button class="dropdown-item" type="button">
                            Year
                          </button>
                        </li>
                      </ul>
                    </div>
                  </span>
                </Card.Title>
                <Card.Text className="row gx-1">
                  <div style={{ marginTop: "1em" }} className="col">
                    <i
                      className="fas fa-shopping-cart"
                      style={{ fontSize: "36px", color: "#012970" }}
                    ></i>
                  </div>
                  <div className="col">
                    <h3 style={{ color: "#012970" }}>145</h3>
                    <span style={{ color: "green" }}>12%</span>
                    <span style={{ color: "gray" }}> Increase</span>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: "27rem", padding: "1em", margin: "1em" }}>
              <Card.Body>
                <Card.Title>
                  <span style={{ color: "#012970" }}>Revenue</span>{" "}
                  <span style={{ color: "#8e9fbf" }}>| This Month</span>
                  <span style={{ float: "right" }}>
                    <div class="dropdown">
                      <button
                        style={{
                          background: "transparent",
                          color: "blue",
                          border: "none",
                        }}
                        class="btn btn-secondary "
                        type="button"
                        id="dropdownMenu2"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        ...
                      </button>
                      <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                        <li>
                          <button class="dropdown-item" type="button">
                            Today
                          </button>
                        </li>
                        <li>
                          <button class="dropdown-item" type="button">
                            This Month
                          </button>
                        </li>
                        <li>
                          <button class="dropdown-item" type="button">
                            Year
                          </button>
                        </li>
                      </ul>
                    </div>
                  </span>
                </Card.Title>
                <Card.Text className="row gx-1">
                  <div style={{ marginTop: "1em" }} className="col">
                    <i
                      className="material-icons"
                      style={{ fontSize: "36px", color: "green" }}
                    >
                      attach_money
                    </i>
                  </div>
                  <div className="col">
                    <h3 style={{ color: "#012970" }}>$ 3264</h3>
                    <span style={{ color: "green" }}>8%</span>
                    <span style={{ color: "gray" }}> Increase</span>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card style={{ width: "100%", padding: "1em", marginTop: "2em" }}>
              <Card.Body>
                <Card.Title>
                  <span style={{ color: "#012970" }}>Revenue</span>{" "}
                  <span style={{ color: "#8e9fbf" }}>| This Month</span>
                  <span style={{ float: "right" }}>
                    <div class="dropdown">
                      <button
                        style={{
                          background: "transparent",
                          color: "blue",
                          border: "none",
                        }}
                        class="btn btn-secondary "
                        type="button"
                        id="dropdownMenu2"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        ...
                      </button>
                      <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                        <li>
                          <button class="dropdown-item" type="button">
                            Today
                          </button>
                        </li>
                        <li>
                          <button class="dropdown-item" type="button">
                            This Month
                          </button>
                        </li>
                        <li>
                          <button class="dropdown-item" type="button">
                            Year
                          </button>
                        </li>
                      </ul>
                    </div>
                  </span>
                </Card.Title>
                <Card.Text className="row gx-1">
                  <div style={{ marginTop: "1em" }} className="col">
                    <i
                      className="fa fa-users"
                      style={{ fontSize: "36px", color: "orange" }}
                    ></i>
                  </div>
                  <div className="col">
                    <h3 style={{ color: "#012970" }}>1244</h3>
                    <span style={{ color: "red" }}>12%</span>
                    <span style={{ color: "gray" }}> decrease</span>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          {/*--------------------- Line Chart----------------- */}
          <div>
            <Card style={{ width: "100%", padding: "1em", marginTop: "2em" }}>
              <Card.Body>
                <Card.Title>
                  <span style={{ color: "#012970" }}>Reports</span>{" "}
                  <span style={{ color: "#8e9fbf" }}> / Today</span>
                  <span style={{ float: "right" }}>
                    <div class="dropdown">
                      <button
                        style={{
                          background: "transparent",
                          color: "blue",
                          border: "none",
                        }}
                        class="btn btn-secondary "
                        type="button"
                        id="dropdownMenu2"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        ...
                      </button>
                      <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                        <li>
                          <button class="dropdown-item" type="button">
                            Today
                          </button>
                        </li>
                        <li>
                          <button class="dropdown-item" type="button">
                            This Month
                          </button>
                        </li>
                        <li>
                          <button class="dropdown-item" type="button">
                            Year
                          </button>
                        </li>
                      </ul>
                    </div>
                  </span>
                </Card.Title>
                <Card.Text style={{ height: "450px" }}>
                  <MyResponsiveLine />
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div style={{ width: "30%" }}>
          <Card>
            <Card.Body style={{ marginBottom: "-4em" }}>
              <Card.Title>
                <span style={{ color: "#012970" }}>Recent Activity </span>{" "}
                <span style={{ color: "#8e9fbf" }}>| Today</span>
                <span style={{ float: "right" }}>
                  <div class="dropdown">
                    <button
                      style={{
                        background: "transparent",
                        color: "blue",
                        border: "none",
                      }}
                      class="btn btn-secondary "
                      type="button"
                      id="dropdownMenu2"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      ...
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                      <li>
                        <button class="dropdown-item" type="button">
                          Today
                        </button>
                      </li>
                      <li>
                        <button class="dropdown-item" type="button">
                          This Month
                        </button>
                      </li>
                      <li>
                        <button class="dropdown-item" type="button">
                          Year
                        </button>
                      </li>
                    </ul>
                  </div>
                </span>
              </Card.Title>
            </Card.Body>

            <MDBContainer className="py-5">
              <MDBRow>
                <MDBCol md="12">
                  <div id="content">
                    <ul
                      style={{ marginLeft: "6em" }}
                      className="timeline-1 text-black"
                    >
                      <li className="event" data-date="32 min">
                        <p>Quia quae rerum explicabo officiis beatae</p>
                      </li>
                      <li className="event" data-date="56 min">
                        <p>Voluptatem blanditiis blanditiis eveniet</p>
                      </li>
                      <li className="event" data-date="2 hrs">
                        <p>Voluptates corrupti molestias voluptatem</p>
                      </li>
                      <li className="event" data-date="1 day">
                        <p className="mb-0">
                          Tempore autem saepe occaecati voluptatem tempore
                        </p>
                      </li>
                      <li className="event" data-date="2 day">
                        <p className="mb-0">
                          Est sit eum reiciendis exercitationem
                        </p>
                      </li>
                      <li className="event" data-date="4 weeks">
                        <p className="mb-0">
                          Dicta dolorem harum nulla eius. Ut quidem quidem sit
                          quas
                        </p>
                      </li>
                    </ul>
                  </div>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </Card>
          {/* ----------------Radar Chart--------- */}
          <div>
            <Card style={{ width: "100%", padding: "1em", marginTop: "2em" }}>
              <Card.Body>
                <Card.Title>
                  <span style={{ color: "#012970" }}>Budget Report</span>{" "}
                  <span style={{ color: "#8e9fbf" }}>| This Month</span>
                  <span style={{ float: "right" }}>
                    <div class="dropdown">
                      <button
                        style={{
                          background: "transparent",
                          color: "blue",
                          border: "none",
                        }}
                        class="btn btn-secondary "
                        type="button"
                        id="dropdownMenu2"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        ...
                      </button>
                      <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                        <li>
                          <button class="dropdown-item" type="button">
                            Today
                          </button>
                        </li>
                        <li>
                          <button class="dropdown-item" type="button">
                            This Month
                          </button>
                        </li>
                        <li>
                          <button class="dropdown-item" type="button">
                            Year
                          </button>
                        </li>
                      </ul>
                    </div>
                  </span>
                </Card.Title>
                <Card.Text style={{ height: "250px" }}>
                  <MyResponsiveRadar />
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          {/* Pie Chart */}
          <div>
            <Card style={{ width: "100%", padding: "1em", marginTop: "2em" }}>
              <Card.Body>
                <Card.Title>
                  <span style={{ color: "#012970" }}>Website Traffic</span>{" "}
                  <span style={{ color: "#8e9fbf" }}>| Today</span>
                  <span style={{ float: "right" }}>
                    <div class="dropdown">
                      <button
                        style={{
                          background: "transparent",
                          color: "blue",
                          border: "none",
                        }}
                        class="btn btn-secondary "
                        type="button"
                        id="dropdownMenu2"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        ...
                      </button>
                      <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                        <li>
                          <button class="dropdown-item" type="button">
                            Today
                          </button>
                        </li>
                        <li>
                          <button class="dropdown-item" type="button">
                            This Month
                          </button>
                        </li>
                        <li>
                          <button class="dropdown-item" type="button">
                            Year
                          </button>
                        </li>
                      </ul>
                    </div>
                  </span>
                </Card.Title>
                <Card.Text style={{ height: "250px" }}>
                  <MyResponsivePie />
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
